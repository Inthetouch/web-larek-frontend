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

export interface IUserInfo {
  address: string;
  payment: string;
  email: string;
  phone: string;
}

export interface IOrderResult {
  _id: string;
  image: string;
  total: number;
}

export interface IProductData {
  cards: IProduct[];
  preview: string | null;
  addCard(card: IProduct): void;
  deleteCard(cardId: string, payload:Function | null): void;
  updateCard(cardId: IProduct, payload:Function | null): void;
  getCard(cardId: string): IProduct;
}

export interface IUserData {
  setUserInfo(userData: IUserInfo): void;
  checkUserInfo(data: Record<keyof IUserInfo, string>): boolean;
}