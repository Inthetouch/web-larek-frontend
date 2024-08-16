import { Api } from './components/base/api';
import { IApi, IProduct } from './types';
import { EventEmitter, IEvents } from './components/base/events';
import { API_URL, settings } from './utils/constants';
import { AppApi } from './components/appApi';
import { ProductData } from './components/model';
import './scss/styles.scss';
import { Product } from './components/product';
import { ProductConteiner } from './components/productContainer';

const events = new EventEmitter();

const baseApi: IApi = new Api(API_URL, settings);
const api = new AppApi(baseApi);

const listProduct = new ProductData(events);

const oneProduct = {
	"id": "c101ab44-ed99-4a54-990d-47aa2bb4e7d9",
	"description": "Лизните этот леденец, чтобы мгновенно запоминать и узнавать любой цветовой код CSS.",
	"image": "/Shell.svg",
	"title": "HEX-леденец",
	"category": "другое",
	"price": 1450
}

const allProduct = [
  {
      "id": "854cef69-976d-4c2a-a18c-2aa45046c390",
      "description": "Если планируете решать задачи в тренажёре, берите два.",
      "image": "/5_Dots.svg",
      "title": "+1 час в сутках",
      "category": "софт-скил",
      "price": 750
  },
  {
      "id": "c101ab44-ed99-4a54-990d-47aa2bb4e7d9",
      "description": "Лизните этот леденец, чтобы мгновенно запоминать и узнавать любой цветовой код CSS.",
      "image": "/Shell.svg",
      "title": "HEX-леденец",
      "category": "другое",
      "price": 1450
  },
  {
      "id": "b06cde61-912f-4663-9751-09956c0eed67",
      "description": "Будет стоять над душой и не давать прокрастинировать.",
      "image": "/Asterisk_2.svg",
      "title": "Мамка-таймер",
      "category": "софт-скил",
      "price": null
  },
  {
      "id": "412bcf81-7e75-4e70-bdb9-d3c73c9803b7",
      "description": "Откройте эти куки, чтобы узнать, какой фреймворк вы должны изучить дальше.",
      "image": "/Soft_Flower.svg",
      "title": "Фреймворк куки судьбы",
      "category": "дополнительное",
      "price": 2500
  },
  {
      "id": "1c521d84-c48d-48fa-8cfb-9d911fa515fd",
      "description": "Если орёт кот, нажмите кнопку.",
      "image": "/mute-cat.svg",
      "title": "Кнопка «Замьютить кота»",
      "category": "кнопка",
      "price": 2000
  },
  {
      "id": "f3867296-45c7-4603-bd34-29cea3a061d5",
      "description": "Чтобы научиться правильно называть модификаторы, без этого не обойтись.",
      "image": "Pill.svg",
      "title": "БЭМ-пилюлька",
      "category": "другое",
      "price": 1500
  },
  {
      "id": "54df7dcb-1213-4b3c-ab61-92ed5f845535",
      "description": "Измените локацию для поиска работы.",
      "image": "/Polygon.svg",
      "title": "Портативный телепорт",
      "category": "другое",
      "price": 100000
  },
  {
      "id": "6a834fb8-350a-440c-ab55-d0e9b959b6e3",
      "description": "Даст время для изучения React, ООП и бэкенда",
      "image": "/Butterfly.svg",
      "title": "Микровселенная в кармане",
      "category": "другое",
      "price": 750
  },
  {
      "id": "48e86fc0-ca99-4e13-b164-b98d65928b53",
      "description": "Очень полезный навык для фронтендера. Без шуток.",
      "image": "Leaf.svg",
      "title": "UI/UX-карандаш",
      "category": "хард-скил",
      "price": 10000
  },
  {
      "id": "90973ae5-285c-4b6f-a6d0-65d1d760b102",
      "description": "Сжимайте мячик, чтобы снизить стресс от тем по бэкенду.",
      "image": "/Mithosis.svg",
      "title": "Бэкенд-антистресс",
      "category": "другое",
      "price": 1000
  }
]

// api.getProducts()
//     .then((products) => {
//         listProduct.addProduct(products);
//         console.log(listProduct.returnProducts)
//     })

events.onAll((event) => {
    console.log(event.eventName, event.data);
})

const prodTemplate:HTMLTemplateElement = document.querySelector('#card-catalog'); 
const productContainer = new ProductConteiner(document.querySelector('.gallery'));

const product = new Product(prodTemplate, events);
const product1 = new Product(prodTemplate, events);

const arr = [];

arr.push(product.render(allProduct[0]));
arr.push(product1.render(allProduct[1]));


productContainer.render({catalog:arr});