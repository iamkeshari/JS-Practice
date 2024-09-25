class Student {
    name;
    age;
    constructor(name,age) {
        this.name = name;
        this.age = age;
        this.greet();

    }
    greet(){

        console.log(`Hello ${this.name}`);
        
    } 
    greet2(){
        return `Hell0 ${this.name}`;
    }   
}
let stud1 = new Student('Nilima',24);
console.log(stud1.name);
console.log(stud1.age);
console.log(stud1.greet2());


