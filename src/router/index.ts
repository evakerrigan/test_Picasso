import { NotFound } from "../pages/NotFound/NotFound";
import { Main } from "../pages/Main/Main";
import { PostPage } from "../pages/PostPage/PostPage";

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
