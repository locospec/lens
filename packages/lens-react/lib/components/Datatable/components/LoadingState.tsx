const LoadingState = () => {
  // const { variantClass } = useLensContext();
  return (
    <div
      className={
        "twp lens-wrapper w-full h-full flex items-center justify-center border rounded-lg tabloading"
      }
    >
      <label className="text-2xl font-semibold">Loading Table.......</label>
    </div>
  );
};

export default LoadingState;
