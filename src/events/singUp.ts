import { User } from "../classes/user";
import { URL_PAGE } from "../services/config";

export function initSignUpEvents(): void {
    const logInButton: HTMLButtonElement = document.getElementById("sign-up-button") as HTMLButtonElement;
    logInButton.addEventListener("click", signUpButtonClickEvent);
}

function signUpButtonClickEvent(): void {
    const password: string = (document.getElementById("sign-up-password") as HTMLInputElement).value;
    const repeatPassword: string = (document.getElementById("sign-up-repeat-password") as HTMLInputElement).value;
    if (password != repeatPassword) throw "passwords do not match"; // odradi preko observable
    const user: User = new User((document.getElementById("sign-up-pen-name") as HTMLInputElement).value, password);
    user.signUp().then((signUpSuccessful) => {
        if (typeof signUpSuccessful == "boolean") if (signUpSuccessful) window.location.href = `${URL_PAGE}login`;
    });
}
