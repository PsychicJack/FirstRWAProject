export class User {
    id: number
    penName: string;
    password: string;

    constructor(penName: string, password: string, id: number = 0) {
        this.penName = penName;
        this.password = password;
        this.id = id;
    }
}
