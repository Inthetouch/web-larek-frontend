import { IEvents } from "./base/events";
import { Modal } from "./base/modal";

interface IModalProduct {
    modalProduct: {
        id: string;
        title: string;
        price: number;
        category: string;
        image: string;
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
    public productId: string;
    

    constructor(container: HTMLElement, events: IEvents) {
        super(container, events);
        
        
        this.productImage = this.container.querySelector('.card__image');
        this.productTitle = this.container.querySelector('.card__title');
        this.productPrice = this.container.querySelector('.card__price');
        this.productCategory = this.container.querySelector('.card__category');
        this.productDescription = this.container.querySelector('.card__text');
        this.productBuyButton = this.container.querySelector('.button');

        this.productBuyButton?.addEventListener('click', () => {
            this.events.emit('product:add', { product: this });
        })
    }

    set modalProduct({id, title, price, category, image, description}: {id: string, title: string, price: number, category: string, image: string, description: string}) {
        this.productId = id;
        this.productTitle.textContent = title;
        this.productImage.src = image;
        this.productPrice.textContent = price ? price.toString() : 'Бесценно';
        this.productCategory.textContent = category;
        this.productDescription.textContent = description;
        super.open();
    }
}

