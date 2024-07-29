export interface IProduct {
  _id: string;
  category: string;
  title: string;
  description: string;
  price: number | null;
  image: string;
}

export interface IBasket {
  _id: string;
  items: string[];
  price: number;
  total: number;
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
  _id: string;
  image: string;
  total: number;
}

export interface ICardsData {
  cards: IProduct[];
  preview: string | null;
}