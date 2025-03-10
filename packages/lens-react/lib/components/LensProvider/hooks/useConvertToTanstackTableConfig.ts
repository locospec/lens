interface UseConvertToTanstackTableConfigInterface {
  config: any;
}

const useConvertToTanstackTableConfig = ({
  config,
}: UseConvertToTanstackTableConfigInterface) => {
  if (!config) {
    throw new Error(
      "config object not found pls check the backend configuration endpoint!"
    );
  }
  const configData = config.data;

  const attributes = configData.attributes;
  const filters = configData.lensSimpleFilters;

  const processed_columns = Object.keys(attributes).map((key) => {
    return {
      id: key,
      accessorKey: key,
      header: attributes[key].label,
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      show: true,
    };
  });

  const processed_filters: any = {};
  Object.keys(filters).map((key) => {
    const modified_key = key.replace(".", "_");
    processed_filters[modified_key] = {
      label: filters[key].label,
      type: filters[key].type,
      isNullable: true,
      //   dependsOn: ["state", "district"],
      modelName: filters[key].model,
    };
  });

  const processedConfig: any = {
    default: {
      view_id: "default",
      view_name: configData.label,
      type: "table",
      selectionType: "none",
      columns: processed_columns,
      filters: processed_filters,
      actions: {},
    },
  };

  return { processedConfig };
};

export default useConvertToTanstackTableConfig;
