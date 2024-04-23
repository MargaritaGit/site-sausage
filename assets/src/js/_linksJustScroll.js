export function linksOnPageJustScroll() {

    const links = document.querySelectorAll('a');

    links.forEach(link => {
        // console.log(link); console.log(link.innerHTML); console.log(link.href);

        link.onclick = (event) => {
            // console.log(window.location.href); console.log(link.href);

            if (!link.href.includes(`${window.location.href}#`)) {
                return;
            }

            event.preventDefault();

            // find out to where link leads
            const id = link.href.slice(link.href.indexOf('#') + 1);
            // console.log(id);

            // scroll to linked element
            document.getElementById(id)?.scrollIntoView(
                {
                    block: "start",
                    behavior: "smooth"
                });
        }
    });

}