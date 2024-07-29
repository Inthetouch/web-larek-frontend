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
- src/scss/styles.scss — корневой файл стилей
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
## Данные и типы данных, используемые в приложении

### IProduct
Интерфейс описывает структуру объекта продукта. Используется для представления информации о продукте, включая идентификатор, название, описание, категорию, цену и изображение.
```
export interface IProduct {
  _id: string;
  category: string;
  title: string;
  description: string;
  price: number | null;
  image: string;
}
```

### IBasket
Интерфейс описывает структуру объекта корзины. Включает идентификатор корзины, общую цену, количество товаров и массив идентификаторов товаров, добавленных в корзину.
```
export interface IBasket {
  id: string;
  items: string[];
  price: number;
  total: number;
}
```

### IOrderDelivery
Интерфейс описывает структуру данных доставки заказа. Содержит адрес доставки и информацию о способе оплаты.
```
export interface IOrderDelivery {
  address: string;
  payment: string;
}
```

### IOrderContact
Интерфейс описывает структуру контактной информации для заказа. Включает email и номер телефона покупателя.
```
export interface IOrderContact {
  email: string;
  phone: string;
}
```

### IOrderResult
Интерфейс описывает структуру результата создания заказа. Содержит идентификатор заказа и общую сумму.
```
export interface IOrderResult {
  _id: string;
  image: string;
  total: number;
}
```

### ICardsData
Интерфейс описывает структуру карточек. Включая в себя просмотр карточки.
```
export interface ICardsData {
  cards: IProduct[];
  preview: string | null;
}
```

