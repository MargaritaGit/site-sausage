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

  const response = await fetch(
    'http://u995982r.beget.tech/for-site-sausage-token/senderToTgBot.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'Content-Type': 'application/json', //! Cause Error: Access to fetch at '....' from origin '....' has been blocked by CORS policy: Response to preflight request doesn't pass access control che
      },
      body: JSON.stringify(formData),
    }
  );
  // console.log('response', response);

  const data = await response.json();
  // console.log('data', data);

  if (data.ok) {
    alert(`${this.name.value}, ваш запрос отправлен!`);
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
