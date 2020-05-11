export function createElementWithClass(
    host: HTMLDivElement | HTMLFormElement | HTMLElement,
    className: string = "",
    elementType: string = "div"
): HTMLDivElement | HTMLElement {
    let element: HTMLElement;
    if (host != undefined)
        element = host.appendChild(document.createElement(elementType));
    else element = document.createElement(elementType);
    element.className = className;
    if (elementType == "div") return element as HTMLDivElement;
    else return element;
}

export function createDivWithClass(host: HTMLElement, className : string = "") : HTMLDivElement
{
    const div : HTMLDivElement = host.appendChild(document.createElement("div"));
    div.className = className;
    return div;
}