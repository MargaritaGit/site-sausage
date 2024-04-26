import { flexOrderSlider } from "./_sliderHeader";
import { toggleMobileMenu } from "./_menu";
import { buttonUp } from "./_button_up";
import { linksOnPageJustScroll } from "./_linksJustScroll";
import { productsFlyInEffect } from "./_products_fx";
import { myRellax } from "./_myRellaxAnalog";
import { Parallax } from "./_parallax_my_edit";
import { unfoldContainer } from "./_unfoldContainer";




// задаём высоту псевдоэлемента с фикс.фоном для устойств, не поддерживающих еденицы измерения lvh - Largest Viewport Height
// document.querySelector(':root').style = `--screenHeight: 100vh`
document.querySelector(':root').style = `--screenHeight: ${window.outerHeight}px`


flexOrderSlider('.slider', '2s ease-in-out', 8000);

toggleMobileMenu();

buttonUp();

linksOnPageJustScroll();

productsFlyInEffect('transform 0.65s ease-in-out, opacity 0.65s ease-in-out');
// productsFlyInEffect('0.7s ease-out');

// if (window.innerWidth >= 768) {
myRellax();
// }

// run parallax library
// only for Mouse devices. NOT touchscreens
if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const floats = document.querySelectorAll('.products__float');

    for (let float of floats) {
        new Parallax(float);
    }

    // console.log(true, `matchMedia('(hover: hover) and (pointer: fine)').matches`)
} else {
    console.log(false, `matchMedia('(hover: hover) and (pointer: fine)').matches`)
}

unfoldContainer('height 0.5s', '.whereToBuy__cards', '.whereToBuy__btn', 'Свернуть');