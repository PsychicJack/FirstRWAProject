import { headerDraw } from "./draw/headerDraw";
import { createDivWithClass } from "./fequentlyUsedFunctions";
import { indexDraw } from "./draw/indexDraw";
import { logInDraw, signUpDraw } from "./draw/logInAndSignUpDraw";
import { makeAPostDraw } from "./draw/makeAPostDraw";
import { readDraw } from "./draw/readDraw";

const main = createDivWithClass(document.body, "main");
//console.log(window.location.search);
const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
const page: string | undefined = urlParams.get("page")?.toLowerCase();
if (page == "index" || page == "" || page == undefined) {
    main.innerHTML = "";
    headerDraw(main);
    indexDraw(main);
    cssSetHref("style/header.css", "style/index.css");
} else if (page == "login") {
    main.innerHTML = "";
    logInDraw(main);
    cssSetHref("", "style/logIn.css");
} else if(page == "signup")
{
    main.innerHTML = "";
    signUpDraw(main);
    cssSetHref("", "style/logIn.css");
} else if(page == "makeapost")
{
    main.innerHTML = "";
    headerDraw(main);
    makeAPostDraw(main);
    cssSetHref("style/header.css", "style/makeAPost.css");
}
else if(page == "read" || page == "readpost")
{
    main.innerHTML = "";
    headerDraw(main);
    readDraw(main);
    cssSetHref("style/header.css", "style/read.css");
}


function cssSetHref(header : string, mainStyle: string) : void{
    
    document.querySelector("#css-header")?.setAttribute("href", header);
    document.querySelector("#css")?.setAttribute("href", mainStyle);
}