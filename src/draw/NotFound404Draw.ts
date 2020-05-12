import { createDivWithClass } from "../fequentlyUsedFunctions";



export function NotFound404Draw(host : HTMLDivElement) : void{
    createDivWithClass(host, "four-o-four").innerHTML = "404";
    createDivWithClass(host, "not-found").innerHTML = "Not Found";
}