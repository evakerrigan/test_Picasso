export type UserInfo = {
  id: number;
  email?: string;
  username?: string;
  name?: string;
  address?: {
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

export type Comment = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
};

export type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

// export type OptionProps = {
//   id: number;
//   name: string;
//   phone: string;
//   username: string;
//   website: string;
//   company: CompanyProps;
//   address: AddressProps;
// };
// type CompanyProps = {
//   name: string;
//   catchPhrase: string;
//   bs: string;
// };
// type AddressProps = {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: GeoProps;
// };
// type GeoProps = {
//   lat: string;
//   lng: string;
// };
