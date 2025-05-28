import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

interface HandleDragEndDependencies {
  setColumnOrder: React.Dispatch<React.SetStateAction<string[]>>;
  fixedColumns: (string | undefined)[];
  setActiveId: React.Dispatch<React.SetStateAction<string | null>>;
}

function createHandleDragEnd({
  setColumnOrder,
  fixedColumns,
  setActiveId,
}: HandleDragEndDependencies) {
  return function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      const activeId = active.id as string;
      const overId = over?.id as string;

      setColumnOrder(columnOrder => {
        const oldIndex = columnOrder.indexOf(activeId);
        const newIndex = columnOrder.indexOf(overId);

        const updatedOrder = arrayMove(columnOrder, oldIndex, newIndex);

        fixedColumns.forEach((fixedCol: any) => {
          const currentFixedIndex = updatedOrder.indexOf(fixedCol);
          const originalFixedIndex = columnOrder.indexOf(fixedCol);

          if (currentFixedIndex !== originalFixedIndex) {
            updatedOrder.splice(currentFixedIndex, 1);
            updatedOrder.splice(originalFixedIndex, 0, fixedCol);
          }
        });

        return updatedOrder;
      });
    }

    document.body.classList.remove("cursor-grabbing");
    setActiveId(null);
  };
}

export { createHandleDragEnd };
