import { Box } from "@mui/material";
import { PostItem } from "../PostItem/PostItem";

type PostItemProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostListProps = {
  posts: PostItemProps[];
};

export const PostList = ({ posts }: PostListProps) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </Box>
  );
};
