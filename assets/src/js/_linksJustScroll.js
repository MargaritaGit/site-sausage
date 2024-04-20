/**
 * 
 * @param  {...any} parents HTML elements id, class etc., that are parents of tag a - i.e. links
 */
export function linksJustScroll(...parents) {
    parents.forEach(el => {

        let parent = document.querySelector(el);
        // console.log(parent);

        const links = parent.querySelectorAll('a');

        links.forEach(link => {
            // console.log(link); console.log(link.innerHTML); console.log(link.href);

            link.onclick = (event) => {
                event.preventDefault();

                // find out to where link leads
                const id = link.href.slice(link.href.indexOf('#') + 1);
                // console.log(id);

                // scroll to linked element
                document.getElementById(id).scrollIntoView(
                    {
                        block: "start",
                        behavior: "smooth"
                    });
            }
        });

    });
}