import { IProduct, IProductData, IBasket, IUserData, IUserInfo, IOrderResult } from "../types/index"
import { IEvents } from "./base/events";
import { validate } from "validate.js";
import { constraints } from "../utils/constants"

export class ProductData implements IProductData {
    protected _products: IProduct[] = [];
    protected _preview: string | null;
    protected events: IEvents;

    constructor(events: IEvents) {
        this.events = events;
    }

    addProduct(product: IProduct | IProduct[]): void {
        if(Array.isArray(product)) {
            this._products = [...this._products, ...product];
        } else {
            this._products.push(product);
        }
        this.events.emit('product:add'); 
    }

    get returnProducts() {
        return this._products;
    }

    getProduct(productId: string) {
        return this._products.find(item => item.id === productId);
    }

    deleteProduct(productId: string): boolean {
        const initialLength = this._products.length;
        this._products = this._products.filter(prod => prod.id !== productId);
        const isDelete = this._products.length < initialLength;
        return isDelete;
    }

    set preview(productId: string | null) {
        if(!productId) {
            this._preview = null;
            return;
        }
        const selectedCard = this.getProduct(productId);
        if (selectedCard) {
            this._preview = productId;
            this.events.emit('product:selected')
        }
    }
}


export class Basket implements IBasket {
    protected events: IEvents;
    protected products: IProduct[] = [];
    protected allSum: number = 0;

    constructor(events: IEvents) {
        this.events = events;
    }

    addProduct(product: IProduct): void {
        this.products.push(product);
        this.updateTotalSum();
    }

    removeProduct(productId: string): void {
        this.products = this.products.filter(prod => prod.id !== productId);
    }

    getProducts(): IProduct[] {
        return this.products;
    }

    getTotalPrice(): number {
        return this.products.reduce((total, product) => {
            return total + (product.price || 0);
        }, 0);
    }
    
    private updateTotalSum(): void {
        this.allSum = this.getTotalPrice();
    }
}


export class UserData implements IUserData {
    protected events: IEvents;
    protected address: string;
    protected payment: string;
    protected email: string;
    protected phone: string;

    constructor(events: IEvents) {
        this.events = events;
    }

    saveUserInfo(userData: IUserInfo) {
        this.address = userData.address;
        this.payment = userData.payment;
        this.email = userData.email;
        this.phone = userData.phone;
    }

    getUserInfo(): IUserInfo {
        return { 
            address: this.address, 
            payment: this.payment, 
            email: this.email, 
            phone: this.phone 
        };
    }

    checkUserInfo(userData: IUserInfo): boolean {
        const validationResult = validate(userData, constraints);
        if (validationResult) {
            console.error('Ошибка валидации', validationResult);
            return false;
        }
        return true;
    }
}
