const fetchDataFromEndpoint = (endpoint: string) => {
  const modal_name = endpoint.split("/").pop() as string;

  const endpoints = {
    config: endpoint + "/_config",
    read: endpoint + "/_read",
    read_relation_option: endpoint + "/_read_relation_options",
  };

  return { modal_name, endpoints };
};

export { fetchDataFromEndpoint };
