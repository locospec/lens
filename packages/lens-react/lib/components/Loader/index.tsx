export interface LoaderInterface {
  loadingText?: string;
}

const Loader: React.FC<LoaderInterface> = ({
  loadingText = "Loading, Please be patient..",
}) => {
  const loaderClasses = "text-lg font-semibold text-black dark:text-white";
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-2">
      <div className="relative flex h-20 w-20 animate-spin items-center justify-center rounded-full border-4 border-gray-800 border-t-gray-200 opacity-100 dark:border-white dark:border-t-gray-600"></div>
      <label className={loaderClasses}>{loadingText}</label>
    </div>
  );
};

export default Loader;
