export const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
export const CDN_URL = `${process.env.API_ORIGIN}/content/weblarek`;

export const settings = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const constraints = {
    address: {
        presence: { message: '^Поле адреса не может быть пустым', allowEmpty: false },
        length: { minimum: 6 }
    },
    email: {
        presence: { message: '^Поле email не может быть пустым', allowEmpty: false },
        email: {message: '^Введите корректный email адрес'}
    },
    payment: {
        presence: { message: '^Поле оплаты не может быть пустым', allowEmpty: false },
        inclusion: { within: ['online', 'offline'], message: "^%{value} — недопустимый способ оплаты" }
    },
    phone: {
        presence: { message: '^Поле телефона не может быть пустым', allowEmpty: false },
        format: {
            pattern: /^\+?[1-9]\d{1,14}$/,
            message: "^%{value} — не верный номер телефона"
        }
    }
};