export function flexOrderSlider(sliderId, transitionType = '0.3s linear', interval) {
    const slider = document.querySelector(sliderId);

    const btnNext = slider.querySelector('.slider__btn_next');
    const btnPrev = slider.querySelector('.slider__btn_prev');

    const sliderCont = slider.querySelector('.slider__container');
    const cards = sliderCont.querySelectorAll('.slider__card');

    const dotsContainer = slider.querySelector('.slider__controls');
    const dots = dotsContainer.querySelectorAll('.slider__controls_dot');

    let oneSlideDist = cards[0].offsetWidth;

    const transitionInterval = parseFloat(transitionType) * 1000;

    let intervalId;


    // задаём текущую позицию  равной 0 - как и индекс (в массиве) первой карточки
    let currentPosition = 0;

    cards.forEach((card, index) => {
        card.style = `order: ${index}`;
    })

    function setFlexOrder() {
        for (let i = currentPosition; i < cards.length; i++) {
            cards[i].style = `order: ${i - currentPosition}`;
        }

        for (let i = 0; i < currentPosition; i++) {
            cards[i].style = `order: ${cards.length - currentPosition + i}`;
        }
    }

    function slideToNext() {

        currentPosition++;
        if (currentPosition > (cards.length - 1)) {
            currentPosition = 0
        }
        sliderCont.style.transition = transitionType;
        oneSlideDist = cards[0].offsetWidth;
        sliderCont.style.transform = `translate3d(${-oneSlideDist}px, 0, 0)`;

        sliderCont.addEventListener('transitionend', () => {
            // console.log(`.slider__container transitionend`);

            sliderCont.style.transition = 'none';
            sliderCont.style.transform = 'none';

            // задаём flex order для карточек
            setFlexOrder();

            btnNext.addEventListener('click', slideToNext, { once: true });
        }, { once: true })

        updateDots();

        // console.log(currentPosition);
    }

    function slideToPrev() {
        currentPosition--;
        if (currentPosition < 0) {
            currentPosition = (cards.length - 1);
        }

        // моментально с transition = 'none' смещаем слайдер на показ второго слайда, вставляя перед ним предыдущий с помощью переназначения order
        // Нельзя убирать - если убрать - глюк кпри повторном нажатии на btnPrev из-за ненужной в данный момент transition 0.3s
        sliderCont.style.transition = 'none';

        // задаём flex order для карточек (точно также как и в btnNext.onclick)
        setFlexOrder();

        oneSlideDist = cards[0].offsetWidth;
        sliderCont.style.transform = `translate3d(${-oneSlideDist}px, 0, 0)`;

        // после выполнения предыдущего кода присваиваем transition и обнуляем transform, сдвигая к нужному нам слайду
        setTimeout(() => {
            sliderCont.style.transition = transitionType;
            sliderCont.style.transform = `none`;
            sliderCont.addEventListener('transitionend', () => {
                btnPrev.addEventListener('click', slideToPrev, { once: true });
                // console.log(`.slider__container transitionend - prev`);
            }, { once: true });
        }, 0);

        updateDots();

        // console.log(currentPosition);
        // console.log('slideToPrev')
    }


    btnNext.addEventListener('click', slideToNext, { once: true });
    btnPrev.addEventListener('click', slideToPrev, { once: true });


    // only for devices with Mouse. NOT touchscreens
    if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
        stopAutoslideWhileBtn(btnNext);
        stopAutoslideWhileBtn(btnPrev);
        stopAutoslideWhileBtn(dotsContainer);
    }


    autoSlide(interval);

    function stopAutoslideWhileBtn(btn) {
        btn.addEventListener('mouseenter', () => {
            // console.log('mouseenter');
            clearInterval(intervalId);
        })
        btn.addEventListener('mouseleave', () => {
            // console.log('mouseleave');
            autoSlide(interval);
        })
    }

    function autoSlide(interval) {
        if (interval <= transitionInterval) {
            interval = transitionInterval * 1.1
        }
        if (interval) {
            intervalId = setInterval(() => slideToNext(), interval);
        }
    }


    // !! Make function to generate dots dynamic

    // dotsSwitch_sequentional();

    dotsSwitch_Manual_OnlyFor_3();

    function updateDots() {
        for (let dot of dots) {
            dot.classList.remove('active');
        }

        dots[currentPosition].classList.add('active');
    }

    // function dotsSwitch_withGlitch() {
    //     dots.forEach((dot, i) => {
    //         dot.onclick = () => {
    //             if (i < currentPosition) {
    //                 const tmp = currentPosition;
    //                 for (let j = 0; j < tmp - i; j++) {
    //                     // console.log(j)
    //                     slideToPrev();
    //                 }
    //             }
    //             if (i > currentPosition) {
    //                 const tmp = currentPosition;
    //                 for (let j = 0; j < i - tmp; j++) {
    //                     // console.log(j)
    //                     slideToNext();
    //                 }
    //             }
    //         }
    //     });
    // }

    function dotsSwitch_sequentional() {
        dots.forEach((dot, i) => {
            dot.onclick = () => {
                if (i < currentPosition) {
                    const tmp = currentPosition;
                    slideToPrev();

                    for (let j = 0; j < tmp - i - 1; j++) {
                        setTimeout(() => slideToPrev(), transitionInterval * 1.1);
                    }
                }
                if (i > currentPosition) {
                    const tmp = currentPosition;
                    slideToNext();

                    for (let j = 0; j < i - tmp - 1; j++) {
                        // console.log(j)
                        setTimeout(() => slideToNext(), transitionInterval * 1.1);
                    }
                }
            }
        });
    }

    function dotsSwitch_Manual_OnlyFor_3() {
        dots.forEach((dot, i) => {
            dot.onclick = () => { // можно отрефакторить в цикл
                if (i === 0 && (currentPosition === 1) ||
                    i === 1 && (currentPosition === 2)
                    || i === 2 && (currentPosition === 0)
                ) {
                    slideToPrev();
                }
                if (i === 1 && (currentPosition === 0) ||
                    i === 2 && (currentPosition === 1) ||
                    i === 0 && (currentPosition === 2)
                ) {
                    slideToNext();
                }
                // if (i === 2 && (currentPosition === 0)) {
                //     slideToNext();
                //     setTimeout(() => slideToNext(), transitionInterval * 1.1);
                // }
            }
        });
    }




    // // Slide with Keyboard Buttons - OK
    // function slideWithButtons(e) {
    //     // console.log(e);
    //     if (e.key === 'ArrowRight') {
    //         slideToNext();
    //     } else if (e.key === 'ArrowLeft') {
    //         slideToPrev();
    //     }
    // }

    // function slowerSlideWithButtons(e) {
    //     slideWithButtons(e);
    //     setTimeout(() => {
    //         document.addEventListener('keydown', slowerSlideWithButtons, { once: true });
    //     }, 1500);
    // }

    // document.addEventListener('keydown', slowerSlideWithButtons, { once: true });
}

// flexOrderSlider('.slider', '2s ease-in-out');