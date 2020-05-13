import { headerDraw } from "./draw/headerDraw";
import { createDivWithClass } from "./fequentlyUsedFunctions";
import { indexDraw } from "./draw/indexDraw";
import { logInDraw, signUpDraw } from "./draw/logInAndSignUpDraw";
import { makeAPostDraw } from "./draw/makeAPostDraw";
import { readDraw } from "./draw/readDraw";
import { NotFound404Draw } from "./draw/NotFound404Draw";
import { initLogInEvents } from "./events/login";
import { initSignUpEvents } from "./events/singUp";
import { postCardLoadEvent } from "./events/postCardsLoad";

var userId: number = 0;
const main = createDivWithClass(document.body, "main");
//console.log(window.location.search);
const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
const page: string | undefined = urlParams.get("page")?.toLowerCase();
if (page == "index" || page == "" || page == undefined) {
    main.innerHTML = "";
    headerDraw(main);
    indexDraw(main);
    cssSetHref("style/header.css", "style/index.css");
    postCardLoadEvent(document.querySelector(".post-cards") as HTMLDivElement);
} else if (page == "login") {
    main.innerHTML = "";
    logInDraw(main);
    cssSetHref("", "style/logIn.css");
    initLogInEvents();
} else if (page == "signup") {
    main.innerHTML = "";
    signUpDraw(main);
    cssSetHref("", "style/logIn.css");
    initSignUpEvents();
} else if (page == "makeapost" || page == "make" || page == "create" || page == "createapost") {
    main.innerHTML = "";
    headerDraw(main);
    makeAPostDraw(main);
    cssSetHref("style/header.css", "style/makeAPost.css");
} else if (page == "read" || page == "readpost") {
    main.innerHTML = "";
    headerDraw(main);
    readDraw(main);
    cssSetHref("style/header.css", "style/read.css");
} else {
    main.innerHTML = "";
    headerDraw(main);
    NotFound404Draw(main);
    cssSetHref("style/header.css", "style/notFound404.css");
}

function cssSetHref(header: string, mainStyle: string): void {
    document.querySelector("#css-header")?.setAttribute("href", header);
    document.querySelector("#css")?.setAttribute("href", mainStyle);
}
