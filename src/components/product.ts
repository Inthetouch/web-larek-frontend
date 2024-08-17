import { IProduct } from "../types";

import { Component } from "./base/component";
import { IEvents } from "./base/events";

export class Product extends Component<IProduct>{
    protected events: IEvents;
    protected productImage: HTMLDivElement;
    protected productTitle: HTMLElement;
    protected productPrice: HTMLElement;
    protected productCategory: HTMLElement;
    protected productBuyButton: HTMLButtonElement | null;
    protected productDescription: HTMLElement;
    protected productId: string;

    constructor(protected container: HTMLElement, events: IEvents) {
        
        super(container);

        this.events = events;
        this.productImage = this.container.querySelector('.card__image');
        this.productTitle = this.container.querySelector('.card__title');
        this.productPrice = this.container.querySelector('.card__price');
        this.productDescription = this.container.querySelector('.card__text') || null;
        this.productCategory = this.container.querySelector('.card__category');
        this.productBuyButton = this.container.querySelector('.card__button');

        this.productImage.addEventListener('click', () => {
            this.events.emit('product:selected', { product: this });
        })

        this.productBuyButton?.addEventListener('click', () => {
            this.events.emit('product:add', { product: this });
        })
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