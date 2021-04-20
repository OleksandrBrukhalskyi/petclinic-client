export class User {
    id: number;
    surname: string;
    firstname: string;
    patronymic: string;
    email: string;
    login: string;
    password: string;
    role: string;
    token?: string;

    constructor(surname: string, firstname: string, patronymic: string,
                email: string, login: string, password: string) {
            this.surname = surname;        
            this.firstname = firstname;
            this.patronymic = patronymic;
            this.email = email;
            this.login = login;
            this.password = password;
            

    }

}