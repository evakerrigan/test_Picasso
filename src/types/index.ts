export type UserInfoDTO = {
  id: number;
  email: string;
  username: string;
  name: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

export type CommentDTO = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
};

export type PostDTO = {
  body: string;
  id: number;
  title: string;
  userId: number;
};
