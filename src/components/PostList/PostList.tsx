import { Box } from "@mui/material";
import { PostItem } from "../PostItem/PostItem";
import { Post } from "../../types";

export const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </Box>
  );
};
