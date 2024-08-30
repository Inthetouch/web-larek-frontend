import { IEvents } from "./base/events";
import { Modal } from "./base/modal";

interface IModalProduct {
    product: {
        image: string;
        title: string;
        price: number;
        category: string;
        description: string;
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

    set product({ product }: IModalProduct) {
        this.productImage.src = product.image;
        this.productTitle.textContent = product.title;
        this.productPrice.textContent = product.price.toString();
        this.productCategory.textContent = product.category;
        this.productDescription.textContent = product.description;
        super.open();
    }
}

