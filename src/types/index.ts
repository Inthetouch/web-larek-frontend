import { ApiPostMethods } from "../components/base/api";

export interface IProduct {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number | null;
}

export interface IBasket {
  addProduct(product: IProduct): void;
  removeProduct(productId: string): void;
  getProducts(): IProduct[];
  getTotalPrice(): number;
}

export interface IUserInfo {
  address: string;
  payment: string;
  email: string;
  phone: string;
}

export interface IOrderResult {
  items: string[];
  total: number;
  payment?: string;
  email?: string;
  phone?: string;
  address?: string;
  image: string;
}

export interface IServerResponse {
  total: number;
  items: IProduct[];
}

export interface IProductData {
  preview: string | null;
  addProduct(product: IProduct): void;
  getProduct(productId: string): IProduct;
  deleteProduct(productId: string ): boolean;
}

export interface IUserData {
  saveUserInfo(userData: IUserInfo): void;
  checkUserInfo(userData: IUserInfo): boolean;
}

export interface IApi {
  get<T>(url: string): Promise<T>;
  post<T>(url:string, data:object, method?: ApiPostMethods): Promise<T>;
}