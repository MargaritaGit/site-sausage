'use strict';
import { closeModal, closeModalBtn } from './modal';

const tgform = document.querySelector('.tgform');
// console.log(tgform);

async function formSubmitSafeBackEnd(event) {
  event.preventDefault();
  // console.log(event);

  const userName = this.name.value;
  const userTel = this.tel.value;

  if (!userName || !userTel) {
    alert('Запрос не отправлен! \n\nВведите Имя и Телефон.');
    return;
  }

  const formData = [];

  formData.push(userName);
  formData.push(userTel);

  //! Нужен HTTPS-прокси, чтобы избежать ошибки Mixed Content: запрос с https (github) на http (бесплатный хостинг для бекенда)

  /* https://cors-anywhere.herokuapp.com/corsdemo - To temporarily unlock access to the demo, click on the following button on this web page - с 2021 года  требует ручной активации для каждого домена.
     const proxyURL = 'https://cors-anywhere.herokuapp.com/'; */
  const proxyURL = 'https://cors-anywhere.herokuapp.com/';

  // const proxyURL = '';

  const BACKEND_URL =
    'http://u995982r.beget.tech/for-site-sausage-token/senderToTgBot.php';

  const response = await fetch(proxyURL + BACKEND_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded', // OK fo free http backend
      // 'Content-Type': 'application/json', // may Cause Error: Access to fetch at '....' from origin '....' has been blocked by CORS policy: Response to preflight request doesn't pass access control  on https://cors-anywhere.herokuapp.com/'

      'X-Requested-With': 'XMLHttpRequest', // Нужно для CORS Anywhere
      // 'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  // console.log('response', response);

  const data = await response.json();
  // console.log('data', data);

  if (data.status === 'ok') {
    alert(`${userName}, ваш запрос отправлен!`);
  } else {
    alert(`Произошла ошибка! \n\nЗапрос не отправлен.`);
  }

  tgform.reset();
  closeModal({ target: closeModalBtn });
}

tgform.addEventListener('submit', formSubmitSafeBackEnd);

// todo:
// 1. Add form validation
// 2. Add errors handling (try..catch)
// 3. Add CAPTCHA
