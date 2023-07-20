import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post, UserInfo, Comment } from "../types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
    }),
    getComments: builder.query<Comment[], void>({
      query: () => "comments",
    }),
    getUsers: builder.query<UserInfo[], void>({
      query: () => "users",
    }),
    getUserPosts: builder.query<Post[], { id: string }>({
      query: ({ id }) => ({
       url: id === "All" ? "posts":  `posts/?userId=${id}`,
    }),
    }),
    getUser: builder.query<UserInfo, { id: number }>({
      query: ({ id }) => ({
        url: `users/${id}`,
      }),
    }),
    addComment: builder.mutation({
      query: (comment) => ({
        url: "comments",
        method: "POST",
        body: comment,
      }),
    })
  }),
});

export const { useGetPostsQuery, useGetCommentsQuery, useGetUsersQuery, useGetUserPostsQuery, useAddCommentMutation } = postsApi;