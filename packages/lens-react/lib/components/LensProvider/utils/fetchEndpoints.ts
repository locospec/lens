const fetchEndpoints = (endpoint: string) => {
  const model_name = endpoint.split("/").pop() as string;

  const endpoints = {
    config: endpoint + "/_config",
    read: endpoint + "/_read",
    read_relation_option: endpoint + "/_read_relation_options",
  };

  return { model_name, endpoints };
};

export default fetchEndpoints;
