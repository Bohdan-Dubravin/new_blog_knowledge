import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../../core/axios-base-query";

// Define a service using a base URL and expected endpoints
export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.realworld.io/api/articles",
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query({
      query: (name) => ({ url: "/articles", method: "get" }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGlobalFeedQuery } = feedApi;
