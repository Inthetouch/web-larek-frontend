import { Api } from './components/base/api';
import { IApi, IProduct } from './types';
import { EventEmitter, IEvents } from './components/base/events';
import { API_URL, settings } from './utils/constants';
import { AppApi } from './components/appApi';
import { ProductData } from './components/model';
import './scss/styles.scss';

const events: IEvents = new EventEmitter();

const baseApi: IApi = new Api(API_URL, settings);
const api = new AppApi(baseApi);

const listProduct = new ProductData(events);

const oneProduct = {
    "id": "854cef69-976d-4c2a-a18c-2aa45046c390",
    "description": "Если планируете решать задачи в тренажёре, берите два.",
    "image": "/5_Dots.svg",
    "title": "+1 час в сутках",
    "category": "софт-скил",
    "price": 750
  }

api.getProducts()
    .then((products) => {
        listProduct.addProduct(products);
        console.log(listProduct.returnProducts)
    })
