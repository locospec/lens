import { addDependenciesRecursively } from "../utils/addDependenciesRecursively";

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
      show: true,
    };
  });

  const processed_filters: any = {};
  Object.keys(filters).forEach((key) => {
    processed_filters[key] = {
      label: filters[key].label,
      type: filters[key].type,
      isNullable: true,
      modelName: filters[key].model,
    };
    if (filters[key].dependsOn) {
      const dependencyArray = addDependenciesRecursively(
        filters[key].dependsOn,
        filters
      );
      processed_filters[key].dependsOn = dependencyArray;
    }
    if (filters[key].type === "enum" && filters[key].options) {
      processed_filters[key].options = filters[key].options;
    }
    if (["enum", "date"].includes(filters[key].type)) {
      processed_filters[key].asSimple = true;
    }
  });

  const processedConfig: any = {
    default: {
      name: configData.name,
      type: "table",
      expand: configData.expand || [],
      selectionType: configData?.selectionType || "none",
      selectionKey: configData?.selectionKey || "id",
      columns: processed_columns,
      filters: processed_filters,
      allowedScopes: configData?.allowedScopes || [],
      actions: {},
    },
  };

  return { processedConfig };
};

export default useConvertToTanstackTableConfig;
