export function toggleMobileMenu() {
    const menu = document.querySelector('.nav');
    const menuIcon = document.querySelector('.top-header__icon-menu');
    const menuCloseIcon = menu.querySelector('.nav_mob__icon-close-menu');
    const logo = menu.querySelector('.logo a');

    menuIcon.onclick = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        menu.classList.toggle('nav_mob');

        // запрещаем прокрутку страницы при открытии меню
        // на iPhone всё равно можно прокрутить страницу
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
    }

    // отключаем моб. меню при ресайзе до десктопа
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            menu.classList.remove('nav_mob');
        }
    })


    // закрытие меню
    menu.onclick = (e) => {
        // console.log(e.target);
        // if (window.innerWidth < 1024 && (e.target === menu || e.target === menuCloseIcon || e.target === logo)) {
        if (window.innerWidth < 1024) {
            menu.classList.toggle('nav_mob');
            // возобновляем возможность прокрутки страницы при закрытии меню
            document.body.style.overflow = 'visible';
        }
    }

    // устанавливаем задерку анимации (чтобы не писать вручную через CSS)
    const menuItems = document.querySelectorAll('.nav-list__item');
    menuItems.forEach((menuItem, i) => {
        // console.log(menuItem);
        // console.log((0 + (i / 15)) + 's');
        menuItem.style.animationDelay = (0 + (i / 12)) + 's';
    });
}