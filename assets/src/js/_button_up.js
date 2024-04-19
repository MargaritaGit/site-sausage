export function buttonUp(scrolledCoeff = 1.1) {


    const btnUp = document.getElementById('btn_up');
    console.log(btnUp);

    if (window.scrollY > (scrolledCoeff * window.innerHeight)) {
        btnUp.style.visibility = 'visible';
        btnUp.style.opacity = 1;
    }

    document.onscroll = (event) => {
        // console.log(event);
        // console.log(window.scrollY);
        if (window.scrollY < (scrolledCoeff * window.innerHeight)) {
            btnUp.style.visibility = 'hidden';
            btnUp.style.opacity = 0;
        } else {
            // console.log(window.innerHeight);
            // console.log(window.scrollY);
            btnUp.style.visibility = 'visible';
            btnUp.style.opacity = 1;
        }

    }

    btnUp.onclick = () => {
        // console.log('btnUp');
        // window.scrollTo(0, 0) - просто координаты без указания типа перемотки (моментально или плавно)
        window.scrollTo(
            {
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
    }

}
