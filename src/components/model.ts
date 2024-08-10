import { IProduct, IProductData, IBasket, IUserData, IUserInfo } from "../types/index"
import { IEvents } from "./base/events";
import { format, validate } from "validate.js";

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

    getProduct(productId: string) {
        return this._products.find(item => item.id = productId);
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

    constructor(events: IEvents) {
        this.events = events;
    }

    addProduct(product: IProduct): void {
        this.products.push(product);
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
        const validationResult = validate(userData, this.constraints);
        if (validationResult) {
            console.error('Ошибка валидации', validationResult);
            return false;
        }
        return true;
    }

    private constraints = {
        address: {
            presence: { message: '^Поле адреса не может быть пустым', allowEmpty: false },
            length: { minimum: 6 }
        },
        email: {
            presence: { message: '^Поле email не может быть пустым', allowEmpty: false },
            email: {message: '^Введите корректный email адрес'}
        },
        payment: {
            presence: { message: '^Поле оплаты не может быть пустым', allowEmpty: false },
            inclusion: { within: ['online', 'offline'], message: "^%{value} — недопустимый способ оплаты" }
        },
        phone: {
            presence: { message: '^Поле телефона не может быть пустым', allowEmpty: false },
            format: {
                pattern: /^\+?[1-9]\d{1,14}$/,
                message: "^%{value} — не верный номер телефона"
            }
        }
    };
}
