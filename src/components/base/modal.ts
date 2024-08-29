import { Component } from "./component";
import { IEvents } from "./events";


export class Modal <T> extends Component <T> {
    protected modal: HTMLElement;
    protected events: IEvents;

    constructor(container: HTMLElement, events: IEvents) {
        super(container);
        
        this.events = events;

        const closeButtonElement  = this.container.querySelector('.modal__close');
        closeButtonElement.addEventListener('click', this.close.bind(this));
        this.container.addEventListener('mousedown', (event) => {
            if (event.target === event.currentTarget) {
                this.close();
            }
        });
        this.handleEsc = this.handleEsc.bind(this);
    }

    open() {
        this.container.classList.add('modal_active');
        document.addEventListener('keyup', this.handleEsc);
    };

    close() {
        this.container.classList.remove('modal_active');
        document.removeEventListener('keyup', this.handleEsc);
    };

    handleEsc(evt: KeyboardEvent) {
        if(evt.key === 'Escape') {
            this.close();
        }
    };
}