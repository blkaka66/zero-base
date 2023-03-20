// do something!
function makeScroll(){
    const scrollObserver = document.createElement("div");
    scrollObserver.classList.add("scroll-observer");

    const img = document.createElement("img");
    img.src="img/ball-triangle.svg";

    scrollObserver.appendChild(img);

    document.body.appendChild(scrollObserver);
    console.log(document.body);
}

import { Nav, NewsList } from './components/index.js';


Nav();
NewsList();
makeScroll();