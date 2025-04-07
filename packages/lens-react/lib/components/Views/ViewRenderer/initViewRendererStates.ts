const initViewRendererStates = (config: any) => {
  const tabsList = Object.keys(config).map((key) => {
    return {
      key: key,
      config: config[key],
    };
  });
  const initialShowSheets = Object.keys(config).reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {} as Record<string, boolean>);

  return { tabsList, initialShowSheets };
};
initViewRendererStates.displayName = "initViewRendererStates";

export { initViewRendererStates };
