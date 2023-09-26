import { Product } from "./Product";
import { SupermarketUser } from "./User";

export type Catalog = {
  id: number;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  is_active: boolean;
  creator_use: SupermarketUser;
  products: Product[]
}