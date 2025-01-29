import { Response, createServer } from "miragejs";

export function makeServer() {
  const server = createServer({
    routes() {
      this.namespace = "/api/data-bench";

      // Mocking the /config endpoint
      this.get("/:resource/config", (_, request) => {
        const resource = request.params.resource;

        if (resource === "test-data") {
          return {
            resource: "test-data",
            identifierKey: "data-value",
            selectionType: "multiple",
            columns: [
              { accessorKey: "id", header: "ID", width: 200 },
              { accessorKey: "name", header: "name", width: 100 },
              { accessorKey: "data-value", header: "data-value" },
            ],
          };
        }
        if (resource === "auction-data") {
          return {
            resource: "auction-data",
            identifierKey: "data-value",
            // selectionType: "multiple",
            actions: {
              header: "Actions sample",
              align: "end",
              // width: 700,
              minWidth: 400,
              // maxWidth: 600,
              options: [
                {
                  key: "edit",
                  url: "/edit/:id",
                  icon: "SquarePen",
                  method: "GET",
                },
                {
                  key: "delete",
                  url: "/delete/:id/for/:state.id",
                  icon: "Trash2",
                  text: "Delete",
                  method: "GET",
                  confirmation: true,
                },
                {
                  key: "view",
                  url: "/view/:id",
                  icon: "EyeIcon",
                  method: "GET",
                  confirmation: true,
                },
              ],
            },
            columns: [
              {
                accessorKey: "id",
                header: "Sr no.",
                width: 80,
                maxWidth: 80,
                minWidth: 80,
              },
              {
                accessorKey: "state",
                header: "State",
                width: 100,
                minWidth: 100,
              },
              {
                accessorKey: "district",
                header: "District",
                width: 100,
                minWidth: 100,
              },
              {
                accessorKey: "cities",
                header: "Cities",
                width: 100,
                minWidth: 100,
                show: false,
              },
              {
                accessorKey: "current_users",
                header: "Current Users",
                width: 100,
                minWidth: 200,
              },
              {
                accessorKey: "locality",
                header: "Locality",
                width: 100,
                // minWidth: 100,
              },
              {
                accessorKey: "properties",
                header: "Properties",
                width: 100,
                minWidth: 100,
                align: "end",
              },
            ],
          };
        }

        return new Response(404, {}, { message: "Resource not found" });
      });

      // Mocking the /fetch endpoint
      this.get("/:resource/fetch", (_, request) => {
        const resource = request.params.resource;
        const cursor = Number(request.queryParams.cursor) || 0;
        const pageSize = 20;

        if (resource === "test-data") {
          const completeTestData = Array.from({ length: 200 }, (_, index) => ({
            id: index + 1,
            name: `Test asdsdasdjasjdahsdjkhaskjdhjakshd ahdjkas jkdhaj sdhjka hdkaData ${
              index + 1
            }`,
            "data-value": `Value sdgajsgdjhasgd agsdhjgasd gajhgdhjagsjha gsjhg${
              index + 1
            }`,
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
        if (resource === "auction-data") {
          const completeTestData = Array.from({ length: 200 }, (_, index) => ({
            id: index + 1,
            state: `State ${index + 1}`,
            district: `District ${index + 1}`,
            cities: `City ${index + 1}`,
            current_users: Math.floor(Math.random() * 1000), // Random number of users
            locality: `Locality ${index + 1}`,
            properties: `Property ${index + 1}`,
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
    },
  });

  return server;
}
