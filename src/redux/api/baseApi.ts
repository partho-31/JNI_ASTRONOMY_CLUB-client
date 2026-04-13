import { getAccessToken } from "@/services/authServices";
import { baseURL } from "@/services/config/BaseURL";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseURL}`,
    prepareHeaders: async (headers) => {
      const token = await getAccessToken();
      if (token) {
        headers.set("Authorization", `JWT ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User", "Magazine", "Article","Event"],
  endpoints: () => ({}),
});
