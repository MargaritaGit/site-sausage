import { flexOrderSlider } from "./_sliderHeader";
import { toggleMobileMenu } from "./_menu";
import { buttonUp } from "./_button_up";
import { linksJustScroll } from "./_linksJustScroll";

// flexOrderSlider('.slider', '2s ease-in-out');
flexOrderSlider('.slider', '2s ease-in-out', 6000);

toggleMobileMenu();

buttonUp();

linksJustScroll('.nav', '.logo_mob');



