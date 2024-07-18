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

export interface IOrder {
  contact: IOrderContact;
  delivery: IOrderDelivery;
  basket: IBasket;
}

export interface IProductView {
  render(product: IProduct): void;
}

export interface IBasketView {
  render(basket: IBasket): void;
}

export interface IOrderView {
  render(order: IOrder): void;
}