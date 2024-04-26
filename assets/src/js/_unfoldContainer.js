
export function unfoldContainer(transition = 'height 0.5s', containerQuerSel, btnQuerSel, altText = 'Свернуть') {

    const btn = document.querySelector(btnQuerSel);
    const initText = btn.innerHTML;
    const container = document.querySelector(containerQuerSel);

    let unfoldHeight;

    btn.addEventListener('click', () => {
        toggleFold();
        // toggleBtn();
    })

    function toggleFold() {
        container.style.transition = 'unset';
        container.style.height = 'fit-content';

        unfoldHeight = container.offsetHeight;
        // console.log(unfoldHeight);


        if (container.classList.contains(`${containerQuerSel.slice(1)}_unfold`)) {
            // console.log('has');

            container.style.height = `${unfoldHeight * 1}px`;
            // console.log(container.style.height);

            container.style.transition = transition;
            container.classList.remove(`${containerQuerSel.slice(1)}_unfold`);
            // ._unfold { height: fit-content; }

            setTimeout(() => {
                container.style.height = null; // убираем присвоеный инлайновый стиль

                // убираем transition после завершения анимации - чтобы не анимировалось при window.resize
                container.addEventListener('transitionend', () => {
                    container.style.transition = 'unset';
                    toggleBtn();
                }, { once: true });
            }, 0);

            return;
        }


        container.style.height = null; // убираем присвоеный инлайновый стиль

        container.style.transition = transition;

        setTimeout(() => {
            container.style.height = `${unfoldHeight * 1}px`;

            container.addEventListener('transitionend', () => {
                container.style.height = null;
                container.classList.add(`${containerQuerSel.slice(1)}_unfold`);
                // ._unfold { height: fit-content; }


                container.style.transition = 'unset'; // убираем transition после завершения анимации - чтобы не анимировалось при window.resize
                toggleBtn();
            }, { once: true });
        }, 0);

    }

    function toggleBtn() {
        if (btn.innerHTML === initText) {
            btn.innerHTML = altText;
            return;
        }

        btn.innerHTML = initText;

        console.log(btn.innerHTML)
        console.log(altText)
    }


    // // OK, but not refactored
    // btn.onclick = () => {

    //     if (container.classList.contains('whereToBuy__cards_unfold')) {
    //         // console.log('has');

    //         container.style.transition = 'unset';
    //         container.style.height = 'fit-content';
    //         // console.log('fit-content');
    //         unfoldHeight = container.offsetHeight;
    //         // console.log(unfoldHeight);

    //         container.style.height = `${unfoldHeight * 1}px`;
    //         console.log(container.style.height);


    //         container.classList.remove('whereToBuy__cards_unfold');
    //         container.style.transition = 'height 0.5s';

    //         setTimeout(() => {
    //             container.style.height = null;
    //         }, 0);

    //         // container.classList.remove('whereToBuy__cards_unfold');

    //         return
    //     }

    //     container.style.transition = 'unset';
    //     container.style.height = 'fit-content';

    //     unfoldHeight = container.offsetHeight;
    //     // console.log(unfoldHeight);

    //     container.style.height = null;


    //     container.style.transition = 'height 0.5s';
    //     setTimeout(() => {
    //         container.style.height = `${unfoldHeight * 1}px`;

    //         container.addEventListener('transitionend', () => {
    //             container.style.height = null;
    //             container.classList.toggle('whereToBuy__cards_unfold')
    //         }, { once: true });
    //     }, 0);



    // }
}