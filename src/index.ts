import { headerDraw } from "./draw/headerDraw";
import { createDivWithClass } from "./fequentlyUsedFunctions";
import { indexDraw } from "./draw/indexDraw";
import { LogInDraw } from "./draw/loginDraw";

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
    LogInDraw(main);
    document.querySelector("#css-header")?.setAttribute("href", "");
    document.querySelector("#css")?.setAttribute("href", "style/logIn.css");
} else if(page == "signup")
{
    
    document.querySelector("#css-header")?.setAttribute("href", "");
    document.querySelector("#css")?.setAttribute("href", "style/logIn.css");
}
