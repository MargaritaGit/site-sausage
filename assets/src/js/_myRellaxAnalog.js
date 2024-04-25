export function myRellax(elements = '.rellax, .horellax') {

    let biasedUnits;

    translateOnScroll(elements);

    function translateOnScroll(elements) {
        biasedUnits = document.querySelectorAll(elements);

        setSpeedCoeff();

        // console.log(biasedUnits);
        window.addEventListener('scroll', () => biasUnits(biasedUnits));

        window.addEventListener('load', () => biasUnits(biasedUnits), { once: true });

        // смотрим - не меняется ли позиция значение window.scrollY при появлении/скрытии address-bar в мобильных браузерах
        // setInterval(() =>  console.log(window.scrollY), 1000);
    }

    function biasUnits(units) {
        for (let unit of units) {
            // use Math.sqrt() instead Math.sin() !
            unit.style.transform = `translate3d(${(-Math.sin(1.55 * unit.horSpeedCoeff / 30) * window.scrollY) * 1.4}px, ${(-Math.sin(1.55 * unit.speedCoeff / 10) * window.scrollY) * 0.4}px, 0)`;
        }
    }

    function setSpeedCoeff() {
        // biasedUnits = document.querySelectorAll(array);
        for (let el of biasedUnits) {
            el.style.transition = '0.033s linear';
            el.style.willChange = 'transform';

            // console.log(el.getAttribute('data-rellax-speed'))
            // сохраняем значение скорости в свойство speedCoeff каждого el-а - чтобы при скролле только двигать элементы, но не обращаться к DOM
            // if (window.innerWidth <= 425) {
            //     if (el.getAttribute('data-rellax-mobile-speed')) {
            //         el.speedCoeff = el.getAttribute('data-rellax-mobile-speed');
            //     }
            // } else {

            if (window.innerWidth <= 425) {
                if (el.getAttribute('data-rellax-mobile-speed')) {
                    el.speedCoeff = el.getAttribute('data-rellax-mobile-speed');
                } else {
                    el.speedCoeff = el.getAttribute('data-rellax-speed');
                    // console.log(el.speedCoeff);
                }
                if (el.getAttribute('data-rellax-mobile-horizontal-speed')) {
                    el.horSpeedCoeff = el.getAttribute('data-rellax-mobile-horizontal-speed');
                } else {
                    el.horSpeedCoeff = el.getAttribute('data-rellax-horizontal-speed');
                }
                // console.log(el.horSpeedCoeff);
            } else {

                if (el.getAttribute('data-rellax-speed')) {
                    el.speedCoeff = el.getAttribute('data-rellax-speed');
                    // console.log(el.speedCoeff);
                }

                if (el.getAttribute('data-rellax-horizontal-speed')) {
                    el.horSpeedCoeff = el.getAttribute('data-rellax-horizontal-speed');
                    // console.log(el.horSpeedCoeff);
                }
            }

            // }
            // set default speedCoeff = 0 - no effect without a attribute!
            if (typeof (el.speedCoeff) !== 'string') {
                el.speedCoeff = 0;
            }
            if (typeof (el.horSpeedCoeff) !== 'string') {
                el.horSpeedCoeff = 0;
                // console.log(el.horSpeedCoeff);
            }
            // console.log(typeof (el.speedCoeff));
            // console.log(el);
        }
    }

    window.addEventListener('resize', setSpeedCoeff);

}