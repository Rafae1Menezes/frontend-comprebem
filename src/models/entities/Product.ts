import { SupermarketUser } from "./User";

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  photo: string;
  owner:  SupermarketUser;
}
