export interface IProduct {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number | null;
  image: string;
}

export interface IBasket {
  id: string;
  price: number;
  total: number;
  items: string[];
}

export interface IOrderDelivery {
  address: string;
  payment: string;
}

export interface IOrderContact {
  email: string;
  phone: string;
}

export interface IOrderResult {
  id: string;
  total: number;
}

export interface ApiResponse {
  items: IProduct[];
}