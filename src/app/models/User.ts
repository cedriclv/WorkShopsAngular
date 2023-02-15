export class User {
    public firstName : string;
    public lastName : string;
    public age : number;
    public quote : string;
    public image : string;

    constructor(firstName : string, lastName : string, age : number, quote : string, image : string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.quote = quote;
        this.image = image;
    }

    reset(){
        this.quote = "";
    }
}