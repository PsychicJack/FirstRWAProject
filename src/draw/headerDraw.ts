import {
    createDivWithClass,
} from "../fequentlyUsedFunctions";

export function headerDraw(host: HTMLDivElement): void {
    const header: HTMLDivElement = createDivWithClass(host, "header");
    const logo: HTMLDivElement = createDivWithClass(header, "logo");
    logo.innerHTML = "WIR";
    const menu: HTMLDivElement = createDivWithClass(header, "menu");
    ["Make A Post", "Log in"].forEach((el) => {
        const menuItem: HTMLDivElement = createDivWithClass(menu, "menu-item");
        menuItem.innerHTML = el;
    });
}
