
export function unfoldElement() {

    const btn = document.querySelector('.whereToBuy__btn');
    const cardsCont = document.querySelector('.whereToBuy__cards');

    let unfoldHeight;

    btn.onclick = () => {

        setTimeout(() => {
            cardsCont.classList.toggle('whereToBuy__cards_unfold')
        }, 0);
    }






    // // let initialHeight = cardsCont.offsetHeight;
    // // let initialHeight;
    // let unfoldHeight;

    // // function getInitialHeight() {
    // //     initialHeight = cardsCont.offsetHeight;
    // //     console.log(initialHeight);
    // // }

    // // getInitialHeight();

    // // window.addEventListener('resize', () => getInitialHeight());

    // btn.onclick = () => {

    //     if (false) {
    //         return;
    //     }

    //     cardsCont.style.transition = 'unset';
    //     cardsCont.style.height = 'fit-content';

    //     unfoldHeight = cardsCont.offsetHeight;
    //     console.log(unfoldHeight);

    //     // cardsCont.style.height = `${initialHeight}px`;
    //     // console.log(cardsCont.offsetHeight);

    //     cardsCont.style.transition = 'height 0.5s';
    //     // cardsCont.style.height = `${unfoldHeight * 1.02}px`; // 1.02 - for scale() onhover

    //     cardsCont.style = `--unfoldHeight: ${unfoldHeight * 1.03}px`;
    //     setTimeout(() => {
    //         cardsCont.classList.add('whereToBuy__cards_unfold')
    //     }, 0);



    //     // setTimeout(() => {
    //     //     btn.scrollIntoView({ behavior: "smooth" });
    //     // }, 150);
    // };

}