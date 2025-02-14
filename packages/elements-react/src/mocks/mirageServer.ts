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
            selectionType: "multiple",
            actions: {
              header: "Actions",
              align: "end",
              fixed: true,
              // width: 700,
              minWidth: 200,
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
                // {
                //   key: "view",
                //   url: "/view/:id",
                //   icon: "EyeIcon",
                //   method: "GET",
                //   confirmation: true,
                // },
              ],
            },
            columns: [
              {
                accessorKey: "id",
                header: "Sr no.",
                width: 80,
                maxWidth: 80,
                minWidth: 80,
                fixed: true,
              },
              {
                accessorKey: "state",
                header: "State",
                width: 100,
                minWidth: 100,
                show: false,
              },
              {
                accessorKey: "district",
                header: "District",
                width: 100,
                minWidth: 100,
                // fixed: true,
                show: false,
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
                width: 700,
                minWidth: 100,
                align: "end",
              },
            ],
            filters: {
              f_name: {
                label: "First Name",
                type: "string",
                isNullable: false,
              },
              l_name: {
                label: "Last Name",
                type: "string",
              },
              pan: {
                label: "PAN",
                type: "string",
                isNullable: false,
              },
              date_of_birth: {
                label: "DOB",
                type: "date",
                isNullable: false,
              },
              age: {
                label: "Age",
                type: "number",
                isNullable: false,
              },
              category: {
                label: "Category",
                type: "enum",
                isNullable: false,
                // modelName: "category",
                // selectionType: "single",
                options: [
                  { label: "One", value: "One" },
                  { label: "Two", value: "Two" },
                  { label: "Three", value: "Four" },
                ],
              },
              state: {
                label: "State",
                type: "enum",
                isNullable: false,
                modelName: "state",
              },
              district: {
                label: "District",
                type: "enum",
                isNullable: false,
                dependsOn: ["state"],
                modelName: "district",
              },
              city: {
                label: "City",
                type: "enum",
                isNullable: false,
                dependsOn: ["state", "district"],
                modelName: "city",
              },
              locality: {
                label: "Locality",
                type: "enum",
                isNullable: false,
                dependsOn: ["state", "district", "city"],
                modelName: "locality",
              },
              availability: {
                label: "Availablity",
                type: "boolean",
              },
            },
            asSimpleFilters: ["state"],
          };
        }

        return new Response(404, {}, { message: "Resource not found" });
      });

      // Mocking the /fetch endpoint
      this.post("/:resource/fetch", (_, request) => {
        const resource = request.params.resource;
        // const cursor = Number(request.queryParams.cursor) || 0;
        // const pageSize = 20;

        const body = JSON.parse(request.requestBody);
        const { cursor, search, ...rest } = body;
        const pageSize = 30;
        const filters = JSON.stringify(rest.filters);

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
          const completeTestData = Array.from({ length: 40 }, (_, index) => ({
            id: index + 1,
            state: `State ${index + 1}`,
            district: `District ${index + 1}`,
            cities: `City ${index + 1}`,
            current_users: Math.floor(Math.random() * 1000),
            locality: `Locality ${index + 1}`,
            properties: `Property ${index + 1} ${filters}`,
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

      this.post("/:resource/query/:source", (_, request) => {
        const resource = request.params.resource;
        const dataSource = request.params.source;

        const body = JSON.parse(request.requestBody);
        const { cursor, filters } = body;
        const pageSize = 20;
        const processed = JSON.stringify(filters);

        if (resource === "auction-data") {
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
