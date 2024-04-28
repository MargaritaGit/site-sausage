"use strict"

const coopArr = document.querySelectorAll('.coop');
const modal = document.getElementById('modal');
const closeModalBtn = modal.querySelector('.modal__close');
// const content = modal.querySelector('.modal__content')


for (const coop of coopArr) {
    coop.onclick = (e) => {
        modal.style.display = "block";
        modal.addEventListener('click', closeModal);

    }
}

closeModalBtn.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(e.currentTarget);
    modal.style.display = "none";

});

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
    if (e.target === e.currentTarget) {
        modal.style.display = "none";
        modal.removeEventListener('click', closeModal);
    }
}



