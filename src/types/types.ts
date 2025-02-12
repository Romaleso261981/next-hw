export type Car = {
  id: number;
  brand: string;
  price: number;
  year: number;
  image: string;
};

export type Users = {
  id: number;
  address: {
    street: string;
    suite: string;
    city: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
};

export type Posts = {
  id: number;
  body: string;
  title: string;
  userId: number;
};
