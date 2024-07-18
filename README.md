# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```
## Типы данных

### IProduct

```
export interface IProduct {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number | null;
  image: string;
}
```
#### Описание
Интерфейс описывает структуру объекта продукта. Используется для представления информации о продукте, включая идентификатор, название, описание, категорию, цену и изображение.

### IBasket

```
export interface IBasket {
  id: string;
  price: number;
  total: number;
  items: string[];
}
```

#### Описание
Интерфейс описывает структуру объекта корзины. Включает идентификатор корзины, общую цену, количество товаров и массив идентификаторов товаров, добавленных в корзину.

### IOrderDelivery

```
export interface IOrderDelivery {
  address: string;
  payment: string;
}
```

#### Описание
Интерфейс описывает структуру данных доставки заказа. Содержит адрес доставки и информацию о способе оплаты.

### IOrderContact

```
export interface IOrderContact {
  email: string;
  phone: string;
}
```

#### Описание
Интерфейс описывает структуру контактной информации для заказа. Включает email и номер телефона покупателя.

### IOrderResult

```
export interface IOrderResult {
  id: string;
  total: number;
}
```

#### Описание
Интерфейс описывает структуру результата создания заказа. Содержит идентификатор заказа и общую сумму.

### ApiResponse

```
export interface ApiResponse {
  items: IProduct[];
}
```

#### Описание
Интерфейс описывает структуру ответа от API, который возвращает массив объектов типа IProduct.

### IOrder

```
export interface IOrder {
  contact: IOrderContact;
  delivery: IOrderDelivery;
  basket: IBasket;
}
```

#### Описание
Интерфейс описывает структуру данных заказа. Объединяет контактные данные, информацию о доставке и корзину с товарами.

### IProductView

```
export interface IProductView {
  render(product: IProduct): void;
}
```

#### Описание
Интерфейс для компонента отображения продукта. Включает метод render, который принимает объект IProduct и отображает его.

### IBasketView

```
export interface IBasketView {
  render(basket: IBasket): void;
}
```

#### Описание
Интерфейс для компонента отображения корзины. Включает метод render, который принимает объект IBasket и отображает его.

### IOrderView

```
export interface IOrderView {
  render(order: IOrder): void;
}
```

#### Описание
Интерфейс для компонента отображения заказа. Включает метод render, который принимает объект IOrder и отображает его.