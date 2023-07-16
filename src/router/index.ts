import { NotFound, Main, PostPage } from "../pages";

export const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts/:id",
    component: PostPage,
  },
  {
    path: "/not-found",
    component: NotFound,
  },
  {
    path: "*",
    component: NotFound,
  },
];
