import { Response, createServer } from "miragejs";
import { config, Default_VIEW, sample_view_config } from "./config";

export function makeServer() {
  const server = createServer({
    routes() {
      this.namespace = "/api/data-bench";

      // Mocking the /config endpoint
      this.get("/:resource/_config", (_, request) => {
        const resource = request.params.resource;

        if (resource === "auction-data") {
          return Default_VIEW;
        }

        if (resource === "auction-data-2") {
          return sample_view_config;
        }

        return new Response(404, {}, { message: "Resource not found" });
      });

      // Mocking the /fetch endpoint
      this.post("/:resource/_read", (_, request) => {
        const resource = request.params.resource;

        const body = JSON.parse(request.requestBody);
        const { cursor, search, ...rest } = body;
        const pageSize = 10;
        const filters = JSON.stringify(rest.filters);

        if (resource === "auction-data" || resource === "auction-data-2") {
          const completeTestData = Array.from({ length: 40 }, (_, index) => ({
            id: index + 1,
            state: `State ${index + 1}`,
            district: `District ${index + 1}`,
            cities: `City ${index + 1}`,
            current_users: Math.floor(Math.random() * 1000),
            locality: `Locality ${index + 1}`,
            properties: `Property ${index + 1} ${filters} q=${search}`,
            "state.id": `state_${index + 1}`,
          }));

          const paginatedTestData = completeTestData.slice(
            cursor,
            cursor + pageSize
          );
          const nextCursor =
            cursor + pageSize < completeTestData.length
              ? cursor + pageSize
              : null;

          return {
            data: paginatedTestData,
            next_cursor: nextCursor,
            total: completeTestData.length,
          };
        }

        return new Response(404, {}, { message: "Resource not found" });
      });

      this.post("/:resource/_read_relation_options", (_, request) => {
        const resource = request.params.resource;

        const body = JSON.parse(request.requestBody);
        const { cursor, filters, relation } = body;
        const dataSource = relation;
        const pageSize = 20;
        const processed = JSON.stringify(filters);

        if (resource === "auction-data" || resource === "auction-data-2") {
          let completeTestData: any = [];

          completeTestData = Array.from({ length: 200 }, (_, index) => ({
            label: dataSource + "[" + processed + "]" + index,
            value: dataSource + "_" + index,
          }));

          const paginatedTestData = completeTestData.slice(
            cursor,
            cursor + pageSize
          );
          const nextCursor =
            cursor + pageSize < completeTestData.length
              ? cursor + pageSize
              : null;

          return {
            data: paginatedTestData,
            next_cursor: nextCursor,
            total: completeTestData.length,
          };
        }

        return new Response(404, {}, { message: "Resource not found" });
      });
    },
  });

  return server;
}
