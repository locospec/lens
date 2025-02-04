import { cn } from "@/base/lib/utils";
import { defaultAnimateLayoutChanges, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

const animateLayoutChanges = (args: any) =>
  args.isSorting || args.wasDragging ? defaultAnimateLayoutChanges(args) : true;

const FieldsListItem = ({ column }: any) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      animateLayoutChanges,
      id: column.id,
    });

  const headerDef = column.columnDef;
  const label = headerDef?.header as string;
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
        "le-flex le-justify-between le-py-2",
        (headerDef?.meta as any)?.fixed
          ? "le-pointer-events-none le-text-[var(--gray-7)]"
          : ""
      )}
      style={style as any}
      key={column.id}
      ref={setNodeRef}
      {...attributes}
    >
      <div className="le-flex le-gap-x-2">
        <GripVertical className="le-cursor-grab" {...listeners} />
        <label>{label}</label>
      </div>

      {/* <Switch
        id={column.id}
        value={column.id}
        disabled={(headerDef?.meta as any)?.fixed}
        checked={column.getIsVisible()}
        onCheckedChange={column.getToggleVisibilityHandler()}
      /> */}
      {/* <input
          checked={column.getIsVisible()}
          disabled={!column.getCanHide()}
          onChange={column.getToggleVisibilityHandler()}
          type="checkbox"
        /> */}
    </div>
  );
};

export default FieldsListItem;
