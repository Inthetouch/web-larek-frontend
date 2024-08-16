interface IProductContainer {
    catalog: HTMLElement[];
}

export class ProductConteiner {
    protected container: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;
    }

    set catalog(items: HTMLElement[]) {
        this.container.replaceChildren(...items);
    }

    render(data: Partial<IProductContainer>) {
        Object.assign(this, data);
        return this.container;
    }
}