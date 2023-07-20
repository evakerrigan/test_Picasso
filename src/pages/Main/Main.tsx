import { useState } from "react";
import { PostList } from "../../components/";
import { MySelect } from "../../components/UI/MySelect/MySelect";
import {
  useGetPostsQuery,
  useGetUsersQuery,
  useGetUserPostsQuery
} from "../../api/api";

export const Main = (): JSX.Element => {
  const [selectedSort, setSelectedSort] = useState<string>("All");

  const { data: posts } = useGetPostsQuery();
  const { data: users } = useGetUsersQuery();
  const { data: userPosts } = useGetUserPostsQuery({ id: selectedSort });

  const sortPosts = (sort: string) => {
    setSelectedSort(sort);
  };

  if (!posts || !users || !selectedSort) return <p>Loading...</p>;

  return (
    <div>
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="All"
        options={users}
      />
      {selectedSort === "All" ?
        <PostList posts={posts || []} />
        :
        <PostList posts={userPosts || []} />
        }
    </div>
  );
};
