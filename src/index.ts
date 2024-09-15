import { Api } from './components/base/api';
import { IApi, IProduct } from './types';
import { EventEmitter} from './components/base/events';
import { API_URL, settings } from './utils/constants';
import { AppApi } from './components/appApi';
import { ProductData } from './components/model';
import { Product } from './components/product';
import { ProductConteiner } from './components/productContainer';
import { cloneTemplate } from "./utils/utils";
import { ModalProduct } from './components/modalProduct';
import './scss/styles.scss';

const events = new EventEmitter();
const baseApi: IApi = new Api(API_URL, settings);
const api = new AppApi(baseApi);
const productsData = new ProductData(events);
const productTemplate:HTMLTemplateElement = document.querySelector('#card-catalog');
const cardPreview:HTMLTemplateElement = document.querySelector('#card-preview');  
const productContainer = new ProductConteiner(document.querySelector('.gallery'));
const productModal = new ModalProduct(document.querySelector('#modal-container'), events);


events.onAll((event) => {
    console.log(event.eventName, event.data);
})

api.getProducts()
    .then((products) => {
        productsData.addProduct(products);
        events.emit('products:loaded');

    })
    .catch((error) => {
        console.error(`Ошибка: ${error}`);
    })

//Описание фукнкции - слушателя по event
events.on('products:loaded', () => {
    const productArray = productsData.returnProducts.map((product) => {
        const productInstance = new Product(cloneTemplate(productTemplate), events);
        return productInstance.render(product);
    });

    productContainer.render({catalog: productArray});
});

events.on('product:select', (data: {product: Product}) => {
    const { product } = data;
    const { id, title, price, category, image, description } = productsData.getProduct(product.productId);
    const modalProduct = { id, title, price, category, image, description };
    productModal.render({ modalProduct });
})