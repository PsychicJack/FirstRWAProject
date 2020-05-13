import { from, Observable } from "rxjs";
import { URL_USERS } from "../services/config";

export class User {
    id: number;
    penName: string;
    password: string;

    constructor(penName: string, password: string, id: number = 0) {
        this.penName = penName;
        this.password = password;
        this.id = id;
    }

    logIn(): Promise<any> {
        return new Promise((resolve) => {
            return resolve(
                fetch(`${URL_USERS}?penName=${this.penName}&password=${this.password}`)
                    .then((result) => result.json())
                    .then((data) => {
                        const arr = JSON.parse(JSON.stringify(data));
                        if (arr.length != 1) return -1;
                        else {
                            this.id = arr[0].id;
                            return arr[0].id;
                        }
                    })
            );
        });
    }

    async signUp(): Promise<boolean> {
        if (await User.isPenNameTaken(this.penName)) return false;
        return new Promise((resolve) => {
            return resolve(
                fetch(`${URL_USERS}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ penName: this.penName, password: this.password }),
                })
                    .then(() => {
                        return true;
                    })
                    .catch((err) => {
                        console.log(err);
                        return false;
                    })
            );
        });
    }

    private static isPenNameTaken(penName: string): Promise<boolean> {
        return new Promise((resolve) => {
            return resolve(
                fetch(`${URL_USERS}?penName=${penName}`)
                    .then((result) => result.json())
                    .then((data) => {
                        return JSON.parse(JSON.stringify(data)).length > 0;
                    })
            );
        });
    }
}
