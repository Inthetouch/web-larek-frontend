import { IProduct } from "../types";
import { IEvents } from "./base/events";
import { Modal } from "./base/modal";

interface IModalProduct {
    product: {
        productImage: string;
        productTitle: string;
        productPrice: string;
        productDescription: string;
        productCategory: string;
        productId: string;
    }
}

export class ModalProduct extends Modal<IModalProduct> {
    
    protected productImage: HTMLImageElement;
    protected productTitle: HTMLElement;
    protected productPrice: HTMLElement;
    protected productCategory: HTMLElement;
    protected productDescription: HTMLElement;
    protected productBuyButton: HTMLButtonElement | null;

    constructor(container: HTMLElement, events: IEvents) {
        super(container, events);

        this.productImage = this.container.querySelector('.card__image');
        this.productTitle = this.container.querySelector('.card__title');
        this.productPrice = this.container.querySelector('.card__price');
        this.productCategory = this.container.querySelector('.card__category');
        this.productDescription = this.container.querySelector('.card__text') || null;
        this.productBuyButton = this.container.querySelector('.card__button');

        this.productBuyButton?.addEventListener('click', () => {
            this.events.emit('product:add', { product: this });
        })
    }

    product ({ product }: IModalProduct) {
        this.productImage.style.backgroundImage = `${product.productImage}`;
        this.productTitle.textContent = product.productTitle;
        this.productPrice.textContent = product.productPrice;
        this.productCategory.textContent = product.productCategory;
        this.productDescription.textContent = product.productDescription;
        super.open();
    }
}

