import { IProduct } from "../types";
import { cloneTemplate } from "../utils/utils";
import { IEvents } from "./base/events";

export class Product {
    protected element: HTMLElement;
    protected events: IEvents;
    protected productImage: HTMLDivElement;
    protected productTitle: HTMLElement;
    protected productPrice: HTMLElement;
    protected productCategory: HTMLElement;
    protected productBuyButton: HTMLButtonElement | null;
    protected productDescription: HTMLElement;
    protected productId: string;

    constructor(template: HTMLTemplateElement, events: IEvents) {
        this.events = events;
        this.element = cloneTemplate(template);

        this.productImage = this.element.querySelector('.card__image');
        this.productTitle = this.element.querySelector('.card__title');
        this.productPrice = this.element.querySelector('.card__price');
        this.productDescription = this.element.querySelector('.card__text') || null;
        this.productCategory = this.element.querySelector('.card__category');
        this.productBuyButton = this.element.querySelector('.card__button');

        this.productImage.addEventListener('click', () => {
            this.events.emit('product:selected', { product: this });
        })

        this.productBuyButton?.addEventListener('click', () => {
            this.events.emit('product:add', { product: this });
        })
    }

    render(productData: Partial<IProduct>) {
        Object.assign(this, productData);
        return this.element;
    }

    set id (id: string) {
        this.productId = id;
    }

    set description (description: string) {
        if(this.productDescription !== null){
            this.productDescription.textContent = description;
        }
    }

    set image (image: string) {
        this.productImage.style.backgroundImage = `url(${image})`;
    }

    set title (title:string) {
        this.productTitle.textContent = title;
    }
    
    set category (category: string) {
        this.productCategory.textContent = category;
    }

    set price (price: number | string) {
        this.productPrice.textContent = price.toString();
    }

}