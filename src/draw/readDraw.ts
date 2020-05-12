import { createDivWithClass } from "../fequentlyUsedFunctions";

export function readDraw(host: HTMLDivElement): HTMLDivElement {
    const read: HTMLDivElement = createDivWithClass(host, "read");
    pageSelectorDraw(host);
    return read;
}

function pageSelectorDraw(host: HTMLDivElement): HTMLDivElement {
    const pageSelector: HTMLDivElement = createDivWithClass(host, "page-selector");
    [
        {
            innerHTML: "<",
            element: "button",
        },
        {
            innerHTML: "",
            element: "input",
        },
        {
            innerHTML: ">",
            element: "button",
        },
    ].forEach((el) => {
        const input = createDivWithClass(pageSelector, "page-selector-item").appendChild(
            document.createElement(el.element)
        );
        input.innerHTML = el.innerHTML;
    });

    return pageSelector;
}
