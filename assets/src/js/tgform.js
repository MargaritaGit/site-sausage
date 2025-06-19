import { closeModal, closeModalBtn } from './modal';

const tgform = document.querySelector('.tgform');
console.log(tgform);

async function formSubmit(event) {
  event.preventDefault();
  console.log(event);

  const TOKEN = '';

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

tgform.addEventListener('submit', formSubmit);
