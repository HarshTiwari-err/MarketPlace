import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "role",
      required: true,
      defaultValue: "user",
      // admin: {
      //   // condition: ({ req }) => req.user.role === "admin"
      //   condition: () => true,
      // },
      type: "select",
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Users",
          value: "users",
        },
      ],
    },
  ],
};
