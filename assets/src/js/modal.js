'use strict';

const coopArr = document.querySelectorAll('.coop');
const modal = document.getElementById('modal');
export const closeModalBtn = modal.querySelector('.modal__close');
const modalContent = modal.querySelector('.modal__content');

for (const coop of coopArr) {
  coop.onclick = (e) => {
    modal.style.display = 'flex';
    modal.addEventListener('click', closeModal);
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
  };
}

export function closeModal(e) {
  // console.log(e.target);
  // console.log(e.currentTarget);

  if (e.target === e.currentTarget || e.target === closeModalBtn) {
    modalContent.classList.remove('scale-up-center');
    modalContent.classList.add('scale-down-center');

    // // OPT - 1
    // setTimeout(() => {
    //     // console.log('я внутри колбека settimeout');

    //     modal.style.display = "none";
    //     modalContent.classList.remove('scale-down-center');
    //     modalContent.classList.add('scale-up-center');

    //     modal.removeEventListener('click', closeModal);
    // }, 400);

    // OPT - 2
    modalContent.addEventListener(
      'animationend',
      () => {
        // console.log('я внутри колбека animationend');

        modal.style.display = 'none';
        modalContent.classList.remove('scale-down-center');
        modalContent.classList.add('scale-up-center');

        modal.removeEventListener('click', closeModal);
      },
      { once: true }
    );
  }

  document.body.style.overflow = 'visible';
}
