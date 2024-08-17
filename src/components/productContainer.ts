import { Component } from "./base/component";

interface IProductContainer {
    catalog: HTMLElement[];
}

export class ProductConteiner extends Component<IProductContainer> {

    constructor(protected container: HTMLElement) {
        super(container);
    }

    set catalog(items: HTMLElement[]) {
        this.container.replaceChildren(...items);
    }
}