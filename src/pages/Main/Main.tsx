import { useEffect, useState } from "react";
import axios from "axios";
import { PostList } from "../../components/";
import { MySelect } from "../../components/UI/MySelect/MySelect";
import { URL_POSTS, URL_USERS } from "../../constants";
import { OptionProps, Post } from "../../types";

export const Main = (): JSX.Element => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<OptionProps[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>("");

  useEffect(() => {
    fetchPosts(URL_POSTS);
    fetchUsers();
  }, [])


  async function fetchPosts(url: string) {
    const res = await axios.get(url);
    setPosts(res.data);
  }

  async function fetchUsers() {
    const res = await axios.get(URL_USERS);
    setUsers(res.data);
  }

  const sortPosts = (sort: string) => {
    setSelectedSort(sort);

    if (sort === "All") {
      fetchPosts(URL_POSTS);
    } else {
      fetchPosts(`${URL_POSTS}?userId=${sort}`);
    }
  };

  if (!posts || !users) return <p>Loading...</p>;

  return (
    <div>
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="All"
        options={users}
      />
      <PostList posts={posts} />
    </div>
  );
};
