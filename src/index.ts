import { headerDraw } from "./draw/headerDraw";
import { createDivWithClass } from "./fequentlyUsedFunctions";
import { indexDraw } from "./draw/indexDraw";
import { logInDraw, signUpDraw } from "./draw/logInAndSignUpDraw";
import { makeAPostDraw } from "./draw/makeAPostDraw";

const main = createDivWithClass(document.body, "main");
//console.log(window.location.search);
const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
const page: string | undefined = urlParams.get("page")?.toLowerCase();
if (page == "index" || page == "" || page == undefined) {
    main.innerHTML = "";
    headerDraw(main);
    indexDraw(main);
    document.querySelector("#css-header")?.setAttribute("href", "style/header.css");
    document.querySelector("#css")?.setAttribute("href", "style/index.css");
} else if (page == "login") {
    main.innerHTML = "";
    logInDraw(main);
    document.querySelector("#css-header")?.setAttribute("href", "");
    document.querySelector("#css")?.setAttribute("href", "style/logIn.css");
} else if(page == "signup")
{
    main.innerHTML = "";
    signUpDraw(main);
    document.querySelector("#css-header")?.setAttribute("href", "");
    document.querySelector("#css")?.setAttribute("href", "style/logIn.css");
} else if(page == "makeapost")
{
    main.innerHTML = "";
    headerDraw(main);
    makeAPostDraw(main);
    document.querySelector("#css-header")?.setAttribute("href", "style/header.css");
    document.querySelector("#css")?.setAttribute("href", "style/makeAPost.css");
}
