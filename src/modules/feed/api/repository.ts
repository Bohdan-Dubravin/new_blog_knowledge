import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../../core/axios-base-query";
import { FEED_PAGE_SIZE } from "../consts";
import { GlobalFeedInDTO } from "./dto/global-feed.in";
import { PopularTagsInDTO } from "./dto/popular-tags.in";

interface GlobalFeedParams {
  page: number;
  tag: string | null;
}

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.realworld.io/api/",
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlobalFeedInDTO, GlobalFeedParams>({
      query: ({ page, tag }) => ({
        url: "/articles",
        method: "get",
        params: { limit: FEED_PAGE_SIZE, offset: page * FEED_PAGE_SIZE, tag },
      }),
    }),
    getPopularTags: builder.query<PopularTagsInDTO, any>({
      query: () => ({
        url: "/tags",
        method: "get",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGlobalFeedQuery, useGetPopularTagsQuery } = feedApi;
