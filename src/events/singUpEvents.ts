import { User } from "../classes/user";
import { URL_PAGE } from "../services/config";
import { fromEvent, zip, merge } from "rxjs";

export function initSignUpEvents(): void {
    const logInButton: HTMLButtonElement = document.getElementById("sign-up-button") as HTMLButtonElement;
    logInButton.addEventListener("click", signUpButtonClickEvent);
    checkIfPasswordsMatch();
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

function checkIfPasswordsMatch(): boolean | void {
    const password = document.getElementById("sign-up-password") as HTMLInputElement;
    const repeatPassword = document.getElementById("sign-up-repeat-password") as HTMLInputElement;
    const passwordObservable$ = fromEvent(password, "input");
    const repeatPasswordObservable$ = fromEvent(repeatPassword, "input");
    merge(passwordObservable$, repeatPasswordObservable$).subscribe((x) => {
        const target = x.target as HTMLInputElement;
        if (target.value != password.value || target.value != repeatPassword.value) {
            password.classList.add("password-missmatch");
            repeatPassword.classList.add("password-missmatch");
        } else {
            if (password.classList.contains("password-missmatch")) password.classList.remove("password-missmatch");
            if (repeatPassword.classList.contains("password-missmatch"))
                repeatPassword.classList.remove("password-missmatch");
        }
    });
}

export function goToSignUp()
{
    window.location.href = `${URL_PAGE}signup`;
}