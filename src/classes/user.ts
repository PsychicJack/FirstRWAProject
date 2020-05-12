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

    logIn(): Observable<Promise<number>> {
        return from(
            fetch(`${URL_USERS}?penNane=${this.penName}&password=${this.password}`, { method: "GET" }).then((resault) =>
                resault.json().then((data) => {
                    this.id = data.id;
                    return data.id;
                })
            )
        );
    }

    
}
