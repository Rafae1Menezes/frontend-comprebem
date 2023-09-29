export type User =  {  
  id: number;  
  name: string;  
  email: string;  
  city: string;  
  password: string;  
  photo: string;
}

export type SupermarketUser = {
  user_id: number;
  user: User;
}