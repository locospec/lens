const ACTION_1 = {
  header: "Actions",
  options: [
    {
      key: "edit",
      url: "/edit/:id",
      icon: "SquarePen",
    },
    {
      key: "delete",
      url: "/delete/:id/for/:state.id",
      icon: "Trash2",
      label: "Delete",
      confirmation: true,
    },
  ],
};

const ACTION_2 = {
  // header: "Actions",
  items: [
    {
      key: "edit",
      label: "Edit",
      url: "/update_asset_type?primary_key=:id",
      icon: "SquarePen",
      options: [
        {
          key: "update_asset_type",
          label: "Update Asset Type",
          url: "/update_asset_type?primary_key=:id&state=:state",
        },
        {
          key: "update_sub_asset_type",
          label: "Update Sub Asset Type",
          url: "/update_sub_asset_type?primary_key=:city.locality.id",
        },
      ],
    },
    {
      key: "view",
      label: "View",
      url: "/view/:id",
      icon: "EyeIcon",
    },
    {
      key: "delete",
      label: "Delete",
      url: "/delete_asset_type?primary_key=:id",
      icon: "Trash2",
      confirmation: "true",
      method: "POST",
      options: [
        {
          key: "delete_asset_type",
          label: "Delete Asset Type",
          url: "/delete_asset_type?primary_key=:id",
        },
        {
          key: "delete_sub_asset_type",
          label: "Delete Sub Asset Type",
          url: "/delete_sub_asset_type?primary_key=:city.locality.pin",
        },
      ],
    },
    // {
    //   key: "sample",
    //   // label: "Sample",
    //   // url: "/sample/:id",
    // },
    // {
    //   key: "sample2",
    //   // label: "Sample",
    //   // url: "/sample/:id",
    // },
  ],
};

const new_config = {
  success: true,
  data: {
    name: "sub_asset_type_default_view",
    label: "Sub Asset Types Default View",
    type: "view",
    model: "sub_asset_type",
    selectionType: "multiple",
    selectionKey: "id",
    actions: ACTION_2,
    attributes: {
      id: {
        type: "string",
        label: "Sr. No.",
      },
      state: {
        type: "string",
        label: "State",
      },
      district: {
        type: "string",
        label: "District",
      },
      cities: {
        type: "string",
        label: "Cities",
      },
    },
    lensSimpleFilters: {
      "state.name": {
        type: "enum",
        label: "States",
        model: "state",
      },
      "district.name": {
        type: "enum",
        label: "District",
        model: "district",
        dependsOn: ["state.name"],
      },
      "city.name": {
        type: "enum",
        label: "City",
        model: "city",
        dependsOn: ["district.name"],
      },
      "locality.name": {
        type: "enum",
        label: "Locality",
        model: "locality",
        dependsOn: ["city.name"],
      },
      category: {
        type: "enum",
        label: "Category",
        model: "category",
        options: [
          { title: "One", const: "One" },
          { title: "Two", const: "Two" },
          { title: "Three", const: "Three" },
        ],
      },
    },
    allowedScopes: ["this", "is", "a", "sample", "scope"],
  },
  meta: [],
};

// const new_config_table = {
//   success: true,
//   data: {
//     name: "sub_asset_type_default_view",
//     label: "Sub Asset Types Default View",
//     type: "view",
//     model: "sub_asset_type",
//     attributes: {
//       uuid: {
//         type: "uuid",
//         label: "ID",
//       },
//       name: {
//         type: "string",
//         label: "Name",
//       },
//       asset_type_name: {
//         type: "string",
//         label: "Asset Type Name",
//       },
//     },
//     lensSimpleFilters: {
//       asset_type_name: {
//         type: "enum",
//         label: "Asset Type Name",
//         model: "asset_type",
//       },
//     },
//   },
//   meta: [],
// };

export { new_config };
