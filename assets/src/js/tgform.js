'use strict';
import { closeModal, closeModalBtn } from './modal';

const tgform = document.querySelector('.tgform');
// console.log(tgform);

let formSubmitStatus = 'idle'; // 'idle' | 'pending' | 'success' | 'error'

async function formSubmitSafeBackEnd(event) {
  event.preventDefault();
  // console.log(event);

  console.log('formSubmitStatus:', formSubmitStatus);

  if (formSubmitStatus === 'pending') {
    console.warn('Data is still loading');
    return;
  }

  const userName = this.name.value;
  const userTel = this.tel.value;

  if (!userName || !userTel) {
    alert('Запрос не отправлен! \n\nВведите Имя и Телефон.');
    return;
  }

  // php скрипт будет приминать массив строк - имя и телефон
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

  try {
    formSubmitStatus = 'pending';

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
    console.log('response', response);

    //* чисто для бесплатного HTTPS-прокси https://cors-anywhere.herokuapp.com/  выбрасываем и обрабатываем свою ошибку
    if (response.status === 403) {
      // alert(
      //   'Запрос не отправлен. \n\nПодтвердите, что вы человек - перейдите по ссылке "Подтвердить"\n и нажмите кнопку "Request temporary access to the demo server"'
      // ); // https://cors-anywhere.herokuapp.com/corsdemo
      // return;

      throw new Error(
        'Запрос не отправлен. \n\nПодтвердите, что вы человек - перейдите по ссылке "Подтвердить"\n и нажмите кнопку \n"Request temporary access to the demo server"'
      );
    }

    const data = await response.json();
    console.log('data', data);

    if (data.status === 'ok') {
      alert(`${userName}, ваш запрос отправлен!`);
    } else {
      throw new Error(
        `Произошла ошибка на сервере Telegram! \n\nЗапрос не отправлен.`
      ); // ошибка отправки в тг боте
    }

    formSubmitStatus = 'success';

    tgform.reset();
    closeModal({ target: closeModalBtn });
  } catch (error) {
    formSubmitStatus = 'error';

    console.log(error.message.slice(0, 20));
    alert(error.message);
  }
}

tgform.addEventListener('submit', formSubmitSafeBackEnd);

// todo:
// 1. Add form validation
// 2. Add errors handling (try..catch)
// 3. Add CAPTCHA

//! Создаём телеграмм бота
/**
 * 1. Переходим в BotFather -> start -> вводим /newbot -> получаем сообщение с токеном
 * 2. Находим своего бота в тг и отправляем ему любое сообщение
 * 3. Переходим по адресу https://api.telegram.org/botYOUR_TOKEN/getUpdates
 * 4. В полученном ответе копируем значение из "id" - это chat_id
 * 5. Запросы будут приходить в чат с ботом (после настройки frontend и backend))
 *
 */
//! Создаём телеграмм бота
