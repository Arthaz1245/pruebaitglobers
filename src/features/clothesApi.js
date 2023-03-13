import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const clothesApi = createApi({
  reducerPath: "clothesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getAllClothes: builder.query({
      query: () => `clothes`,
    }),
  }),
});

export const { useGetAllClothesQuery } = clothesApi;
