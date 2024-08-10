import { IApi, IProduct, IOrderResult } from "../types";


export class AppApi {
    private _baseUrl: IApi;

    constructor(baseUrl: IApi) {
        this._baseUrl = baseUrl;
    }

    getProducts(): Promise<IProduct[]> {
        return this._baseUrl.get<IProduct[]>('/product').then((products: IProduct[]) => products)
    }

    postBasket(data: IOrderResult): Promise<void> {
        return this._baseUrl.post<void>('/order', data).then(() => { console.log('Success') }).catch((error) => { console.error('Error', error);})
    }
}