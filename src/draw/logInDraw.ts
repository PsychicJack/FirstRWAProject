import { createDivWithClass } from "../fequentlyUsedFunctions";

export function LogInDraw(host: HTMLDivElement): HTMLDivElement {
    const logIn = createDivWithClass(host, "log-in");
    [
        {
            element: "input",
            type: "text",
            class: "log-in-input",
            placeholder: "pen name",
            innerHTML: "Log in"
        },
        {
            element: "input",
            type: "password",
            class: "log-in-input",
            placeholder: "password",
            innerHTML: ""
        },
        {
            element: "button",
            type: "button",
            class: "log-in-button",
            placeholder: "",
            innerHTML: "Log in"
        }
    ].forEach((el) => {
        console.log("hello")
        const inputDiv = createDivWithClass(logIn, "input-div");
        const input = inputDiv.appendChild(document.createElement(el.element));
        input.setAttribute("type", el.type);
        input.className = el.class;
        input.setAttribute("placeholder", el.placeholder);
        input.innerHTML = el.innerHTML;
    });
    return logIn;
}
