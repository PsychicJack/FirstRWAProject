import { User } from "../classes/user";
import { URL_PAGE } from "../services/config";

export function initLogInEvents(): void {
    const logInButton: HTMLButtonElement = document.getElementById("log-in-button") as HTMLButtonElement;
    logInButton.addEventListener("click", logInButtonClickEvent);
}

function logInButtonClickEvent(): void {
    const user: User = new User(
        (document.getElementById("log-in-pen-name") as HTMLInputElement).value,
        (document.getElementById("log-in-password") as HTMLInputElement).value
    );
    user.logIn().then((result) => {
        if (result > 0) {
            localStorage.setItem("userId", result);
            window.location.replace(`${URL_PAGE}index`);
        }
    });
}

export function goToLogin(): void {
    window.location.href = `${URL_PAGE}login`;
}
