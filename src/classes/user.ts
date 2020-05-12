import { from, Observable } from "rxjs";
import { URL_USERS } from "../services/urls";

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
                fetch(`${URL_USERS}?penName=${this.penName}&password=${this.password}`).then((result) =>
                    result.json().then((data) => {
                        const arr = JSON.parse(JSON.stringify(data));
                        if (arr.length != 1) return 0;
                        else return arr[0].id;
                    })
                )
            );
        });
    }
}
