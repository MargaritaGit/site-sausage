"use strict"

const coopArr = document.querySelectorAll('.coop');
const modal = document.getElementById('modal');
const closeModalBtn = modal.querySelector('.modal__close');
const modalContent = modal.querySelector('.modal__content');


for (const coop of coopArr) {
    coop.onclick = (e) => {
        modal.style.display = "flex";
        modal.addEventListener('click', closeModal);

    }
}

// closeModalBtn.addEventListener('click', (e) => {
//     console.log(e.target);
//     console.log(e.currentTarget);
//     modal.style.display = "none";

// });

// modal.addEventListener('click', (e) => {
//     console.log(e.currentTarget);
//     console.log(e.target);
//     if (e.currentTarget === e.target) {
//         modal.style.display = "none";
//     }
//     // closeModal(e);
// });




function closeModal(e) {
    console.log(e.target);
    console.log(e.currentTarget);

    if (e.target === e.currentTarget || e.target === closeModalBtn) {
        modalContent.classList.remove('scale-up-center');
        modalContent.classList.add('scale-down-center');

        // setTimeout(() => {
        //     // console.log('я внутри колбека settimeout');

        //     modal.style.display = "none";
        //     modalContent.classList.remove('scale-down-center');
        //     modalContent.classList.add('scale-up-center');

        //     modal.removeEventListener('click', closeModal);
        // }, 400);


        modalContent.addEventListener('animationend', () => {
            // console.log('я внутри колбека animationend');

            modal.style.display = "none";
            modalContent.classList.remove('scale-down-center');
            modalContent.classList.add('scale-up-center');

            modal.removeEventListener('click', closeModal);
        }, { once: true });
    }

}



