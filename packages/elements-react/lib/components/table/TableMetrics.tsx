const TableMetrics = ({
  totalCount,
  isResizing,
  columnSizing,
  containerWidth,
  rowSelection,
}: any) => {
  return (
    <div className="flex flex-row items-center justify-between bg-red-200 p-2">
      <pre style={{ minHeight: "10rem" }}>
        {JSON.stringify({ columnSizing }, null, 2)}
      </pre>
      <h3>rowSelection: {JSON.stringify(rowSelection)}</h3>
      <h3>containerWidth {containerWidth}</h3>
      <div className="h-4" />({totalCount} rows)
      <h1 className="bg-yellow-200 p-2">isResizing: {isResizing}</h1>
    </div>
  );
};

export { TableMetrics };
