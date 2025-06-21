'use strict';

import { closeModal, closeModalBtn } from './modal';

const tgform = document.querySelector('.tgform');
console.log(tgform);

async function formSubmitUnSafeFrontEnd(event) {
  event.preventDefault();
  console.log(event);

  const TOKEN = ''; // tg bot token

  const CHAT_ID = '639542300';
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const message = `
  Заявку на сайте заполнил:
  Имя: <b>${this.name.value}</b>
  Телефон: <b>${this.tel.value}</b>
  `;

  console.log(message);

  const response = await fetch(URI_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'html',
    }),
  });

  console.log('response', response);

  const data = await response.json();
  console.log('data', data);

  if (data.ok) {
    alert(`${this.name.value}, ваш запрос отправлен!`);
  } else {
    alert(`Произошла ошибка! \n\nЗапрос не отправлен.`);
  }

  tgform.reset();
  closeModal({ target: closeModalBtn });
}

tgform.addEventListener('submit', formSubmitUnSafeFrontEnd);

//
//
/**
 * async function formSubmitSafeBackEnd(event) {
  event.preventDefault();
  console.log(event);

  const formData = [];

  formData.push(this.name.value);
  formData.push(this.tel.value);

  const response = await fetch(
    'http://u995982r.beget.tech/for-site-sausage-token/index.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    }
  );
  console.log('response', response);

  const data = await response.json();
  console.log('data', data);

  if (data.ok) {
    alert(`${this.name.value}, ваш запрос отправлен!`);
  } else {
    alert(`Произошла ошибка! \n\nЗапрос не отправлен.`);
  }

  tgform.reset();
  closeModal({ target: closeModalBtn });
}

 */
