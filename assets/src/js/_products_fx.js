export function productsFlyInEffect(transitionType) {

    const products = document.querySelector('.products__content');

    const lines = products.querySelectorAll('.products__line');

    const imgs = products.querySelectorAll('.products__item_image-cont');

    const texts = products.querySelectorAll('.products__item_info');

    // initial position styles
    lines.forEach(line => line.classList.add('hidden'));

    imgs.forEach((img) => {
        img.style.transition = transitionType
    });

    texts.forEach(text =>
        text.style.transition = transitionType);


    // create observer instance
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                if (entry.intersectionRatio < 0.15) {
                    // console.log('add(hidden) < 0.15');
                    entry.target.classList.add('hidden');
                }

                if (entry.intersectionRatio > 0.2) {
                    // console.log(`remove('hidden')`);
                    entry.target.classList.remove('hidden');
                }

                // just to be sure 
                // if (entry.intersectionRatio > 0.5) {
                //     // console.log(`remove('hidden')`);
                //     entry.target.classList.remove('hidden');

                //     // // turn off effect after was visible more than 0.5
                //     // observer.unobserve(entry.target);
                // }

            } else {
                // console.log(`add('hidden')`);
                entry.target.classList.add('hidden');
            }
        });

    }, { threshold: [0, 0.15, 0.2, 0.5] });


    // start observing lines with content
    lines.forEach(line => observer.observe(line));

}