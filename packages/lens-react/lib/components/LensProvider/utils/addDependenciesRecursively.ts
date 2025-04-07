const addDependenciesRecursively = (
  dependsOn: string[],
  filters: Record<string, any>
) => {
  let response = [...dependsOn];
  dependsOn.forEach((key) => {
    if (filters[key] && filters[key].dependsOn) {
      filters[key].dependsOn.forEach((_: string) => {
        const newDependencies = addDependenciesRecursively(
          filters[key].dependsOn,
          filters
        );

        response = [...new Set([...response, ...newDependencies])];
      });
    }
  });

  return response;
};

export { addDependenciesRecursively };
