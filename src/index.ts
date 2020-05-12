import { headerDraw } from "./draw/headerDraw";
import { createDivWithClass } from "./fequentlyUsedFunctions";
import { indexDraw } from "./draw/indexDraw";
import { logInDraw, signUpDraw } from "./draw/logInAndSignUpDraw";

const main = createDivWithClass(document.body, "main");
console.log(window.location.search);
const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
const page: string | undefined = urlParams.get("page")?.toLowerCase();
if (page == "index" || page == "" || page == undefined) {
    headerDraw(main);
    indexDraw(main);
    document.querySelector("#css-header")?.setAttribute("href", "style/header.css");
    document.querySelector("#css")?.setAttribute("href", "style/index.css");
} else if (page == "login") {
    logInDraw(main);
    document.querySelector("#css-header")?.setAttribute("href", "");
    document.querySelector("#css")?.setAttribute("href", "style/logIn.css");
} else if(page == "signup")
{
    signUpDraw(main);
    document.querySelector("#css-header")?.setAttribute("href", "");
    document.querySelector("#css")?.setAttribute("href", "style/logIn.css");
}
