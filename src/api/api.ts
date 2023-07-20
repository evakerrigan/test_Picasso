import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostDTO, UserInfoDTO, CommentDTO } from "../types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostDTO[], void>({
      query: () => "posts",
    }),
    getPost: builder.query<PostDTO, { idPost: string | undefined }>({
      query: ({ idPost }) => ({
        url: `posts/${idPost}`,
      }),
    }),
    getComments: builder.query<CommentDTO[], { idPost: string | undefined }>({
      query: ({idPost}) => ({
        url: `posts/${idPost}/comments`,
      }),
    }),
    getUsers: builder.query<UserInfoDTO[], void>({
      query: () => "users",
    }),
    getUser: builder.query<UserInfoDTO, { id: number }>({
      query: ({ id }) => ({
        url: `users/${id}`,
      }),
    }),
    getUserPosts: builder.query<PostDTO[], { id: string }>({
      query: ({ id }) => ({
        url: id === "All" ? "posts" : `posts/?userId=${id}`,
      }),
    }),
    addComment: builder.mutation({
      query: (comment) => ({
        url: "comments",
        method: "POST",
        body: comment,
      }),
    }),
  }),
});

export const {
  useGetPostQuery,
  useGetPostsQuery,
  useGetCommentsQuery,
  useGetUsersQuery,
  useGetUserPostsQuery,
  useAddCommentMutation,
} = postsApi;
