export default class User {

    public id : string;
    public fullname : string;
    public username : string;
    public password : string;
    public role : string;

    constructor(id:string, fullname : string, username : string, password : string, role : string) {
        this.id = id;
        this.fullname = fullname;
        this.username = username;
        this.password = password;
        this.role = role;
    }
}