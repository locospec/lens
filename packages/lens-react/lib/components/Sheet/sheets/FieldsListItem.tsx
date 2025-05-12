import { Switch } from "@lens/base/components/ui/switch";
import { cn } from "@lens/base/lib/utils";
import { defaultAnimateLayoutChanges, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import { splitAndCapitalize } from "@lens/components/utils/splitAndCapitalize";

const animateLayoutChanges = (args: any) =>
  args.isSorting || args.wasDragging ? defaultAnimateLayoutChanges(args) : true;

const FieldsListItem = ({ column, isHidden }: any) => {
  const headerDef = column.columnDef;
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
    cursor: "grab",
    userSelect: "none",
  };

  return (
    <div
      className={cn(
        "flex justify-between py-2",
        (headerDef?.meta as any)?.fixed
          ? "pointer-events-none text-[var(--gray-7)]"
          : ""
      )}
      style={style as any}
      key={column.id}
      ref={setNodeRef}
      {...attributes}
    >
      <div className="flex gap-x-2">
        {!isHidden && (
          <GripVertical
            className={isDragging ? "cursor-grabbing" : "cursor-grab"}
            {...listeners}
          />
        )}
        <label>{label}</label>
      </div>

      <Switch
        id={column.id}
        value={column.id}
        disabled={(headerDef?.meta as any)?.fixed}
        checked={column.getIsVisible()}
        onCheckedChange={() => column.toggleVisibility(!column.getIsVisible())}
      />
    </div>
  );
};

export default FieldsListItem;
