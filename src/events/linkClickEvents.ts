import { URL_PAGE } from "../services/config";

export function initHeaderClickEvents(): void {
    (document.getElementById("log-in") as HTMLDivElement).onclick = () => {
        window.location.href = `${URL_PAGE}login`;
    };
    (document.getElementById("make-a-post") as HTMLDivElement).onclick = () => {
        window.location.href = `${URL_PAGE}make`;
    };
    (document.querySelector(".logo-text") as HTMLDivElement).onclick = () => {
        window.location.href = `${URL_PAGE}index`;
    };
}
