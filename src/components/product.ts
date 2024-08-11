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
    protected productId: string;

    constructor(template: HTMLTemplateElement, events: IEvents) {
        this.events = events;
        this.element = cloneTemplate(template);

        this.productImage = this.element.querySelector('.card__image');
        this.productTitle = this.element.querySelector('.card__title');
        this.productPrice = this.element.querySelector('.card__price');
        this.productCategory = this.element.querySelector('.card_category');
        this.productBuyButton = this.element.querySelector('.card__button')

        this.productImage.addEventListener('click', () => {
            this.events.emit('product:selected', { product: this });
        })

        this.productBuyButton?.addEventListener('click', () => {
            this.events.emit('product:add', { product: this });
        })
    }

    setID(prodId: IProduct) {
        this.productId = prodId.id;
    }

    getID() {
        return this.productId;
    }

    render() {
        return this.element;
    }
}