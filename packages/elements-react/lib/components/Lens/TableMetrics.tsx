export interface TableMetricsProps {
  totalCount?: number;
  isResizing: string | false;
  columnSizing: any;
  containerWidth: number;
  rowSelection: any;
}

const TableMetrics = ({
  totalCount,
  isResizing,
  columnSizing,
  containerWidth,
  rowSelection,
}: TableMetricsProps) => {
  return (
    <div className="le-flex le-items-center le-justify-between le-bg-red-200 le-p-2">
      <pre style={{ minHeight: "10rem" }}>
        {JSON.stringify({ columnSizing }, null, 2)}
      </pre>
      <h3>rowSelection: {JSON.stringify(rowSelection)}</h3>
      <h3>containerWidth {containerWidth}</h3>
      <div className="le-h-4" />({totalCount} rows)
      <h1 className="le-bg-yellow-200 le-p-2">isResizing: {isResizing}</h1>
    </div>
  );
};

export { TableMetrics };
