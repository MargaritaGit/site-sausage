import { flexOrderSlider } from "./_sliderHeader";
import { toggleMobileMenu } from "./_menu";
import { buttonUp } from "./_button_up";
import { linksOnPageJustScroll } from "./_linksJustScroll";
import { productsFlyInEffect } from "./_products_fx";
import { myRellax } from "./_myRellaxAnalog";

// задаём высоту псевдоэлемента с фикс.фоном для устойств, не поддерживающих еденицы измерения lvh - Largest Viewport Height

// document.querySelector(':root').style = `--screenHeight: 100%`
document.querySelector(':root').style = `--screenHeight: ${window.outerHeight}px`



// flexOrderSlider('.slider', '2s ease-in-out');
flexOrderSlider('.slider', '2s ease-in-out', 8000);

toggleMobileMenu();

buttonUp();

linksOnPageJustScroll();

productsFlyInEffect('transform 0.65s ease-in-out, opacity 0.65s ease-in-out');
// productsFlyInEffect('0.7s ease-out');


if (window.innerWidth >= 768) {
    myRellax();
}





