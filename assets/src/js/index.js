import { flexOrderSlider } from "./_sliderHeader";
import { toggleMobileMenu } from "./_menu";
import { buttonUp } from "./_button_up";
import { linksOnPageJustScroll } from "./_linksJustScroll";
import { productsFlyInEffect } from "./_products_fx"

// flexOrderSlider('.slider', '2s ease-in-out');
flexOrderSlider('.slider', '2s ease-in-out', 8000);

toggleMobileMenu();

buttonUp();

linksOnPageJustScroll();

productsFlyInEffect('transform 0.65s ease-in-out, opacity 0.65s ease-in-out');
// productsFlyInEffect('0.7s ease-out');



