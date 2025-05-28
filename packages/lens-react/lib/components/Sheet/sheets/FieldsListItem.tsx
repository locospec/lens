import { defaultAnimateLayoutChanges, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Switch } from "@lens/base/components/ui/switch";
import { cn } from "@lens/base/lib/utils";
import { splitAndCapitalize } from "@lens/components/utils/splitAndCapitalize";
import { GripVertical } from "lucide-react";

const animateLayoutChanges = (args: any) =>
  args.isSorting || args.wasDragging ? defaultAnimateLayoutChanges(args) : true;

const FieldsListItem = ({ column, isHidden }: any) => {
  const headerDef = column.columnDef;
  const visibility = column.getIsVisible();
  const fixed = headerDef.meta.fixed || false;
  const label =
    (headerDef?.header as string) || splitAndCapitalize(column.id) || column.id;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    animateLayoutChanges,
    id: column.id,
    disabled: fixed,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    alignItems: "center",
    userSelect: "none",
  };

  const handleOnCheckChange = () => {
    column.toggleVisibility(!visibility);
  };

  return (
    <div
      key={column.id}
      className={cn(
        "flex justify-between px-1 py-2 hover:bg-gray-100",
        "animate-in slide-in-from-bottom-4",
        (headerDef?.meta as any)?.fixed
          ? "pointer-events-none text-gray-400"
          : "",
        isDragging &&
          "dark:bg-foreground z-20 cursor-grabbing rounded-sm border border-gray-600 bg-white shadow-xl"
      )}
      style={style as any}
      ref={setNodeRef}
      data-visible={visibility}
      {...attributes}
    >
      <div className={cn("flex items-center gap-x-2 text-sm")}>
        {!isHidden && (
          <GripVertical
            size={16}
            className={cn(
              "text-gray-300 dark:text-gray-200",
              isDragging ? "cursor-grabbing" : "cursor-grab"
            )}
            {...listeners}
          />
        )}
        <label>{label}</label>
      </div>

      <Switch
        className="cursor-pointer"
        id={column.id}
        value={column.id}
        disabled={(headerDef?.meta as any)?.fixed}
        checked={visibility}
        onCheckedChange={handleOnCheckChange}
      />
    </div>
  );
};

export default FieldsListItem;
