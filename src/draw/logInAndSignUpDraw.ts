import { createDivWithClass } from "../fequentlyUsedFunctions";

export function logInDraw(host: HTMLDivElement): HTMLDivElement {
    return logInAndSignUpDraw(host, [
        {
            id: "log-in-pen-name",
            element: "input",
            type: "text",
            class: "log-in-input",
            placeholder: "pen name",
            innerHTML: "Log in",
        },
        {
            id: "log-in-password",
            element: "input",
            type: "password",
            class: "log-in-input",
            placeholder: "password",
            innerHTML: "",
        },
        {
            id: "log-in-button",
            element: "button",
            type: "button",
            class: "log-in-button",
            placeholder: "",
            innerHTML: "Log in",
        },
    ]);
}

export function signUpDraw(host: HTMLDivElement): HTMLDivElement {
    return logInAndSignUpDraw(host, [
        {
            id: "sing-up-pen-name",
            element: "input",
            type: "text",
            class: "log-in-input",
            placeholder: "pen name",
            innerHTML: "Log in",
        },
        {
            id: "sing-up-password",
            element: "input",
            type: "password",
            class: "log-in-input",
            placeholder: "password",
            innerHTML: "",
        },
        {
            id: "sing-up-repeat-password",
            element: "input",
            type: "password",
            class: "log-in-input",
            placeholder: "repeat password",
            innerHTML: "",
        },
        {
            id: "sing-up-button",
            element: "button",
            type: "button",
            class: "log-in-button",
            placeholder: "",
            innerHTML: "Sign Up",
        },
    ]);
}

function logInAndSignUpDraw(host: HTMLDivElement, inputs: any[]): HTMLDivElement {
    const logIn = createDivWithClass(host, "log-in");
    inputs.forEach((el) => {
        console.log("hello");
        const inputDiv = createDivWithClass(logIn, "input-div");
        const input = inputDiv.appendChild(document.createElement(el.element));
        input.setAttribute("type", el.type);
        input.className = el.class;
        input.setAttribute("placeholder", el.placeholder);
        input.innerHTML = el.innerHTML;
        input.id = el.id;
    });
    return logIn;
}
