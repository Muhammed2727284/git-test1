let obj = {
    name:'Muhammed',
    print: function(){
        return 'Helo'
    },
}

//Классы
class Person{
    #password;
    static agePerson = 65;

    constructor(name,age, password){
        this.name = name;
        this.age = age;
        this.#password = this.#checkPassword(password);


    }
    

    print(){
        return `Name: ${this.name} age:${this.age}`
    }

    showPrivate(){
        return `Private:${this.#password}`
    }

    #randomPass(){
        let len = 8;
        let res = ''
        const word = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for(let i = 0; i <= len; i++){
            res += Math.floor(Math.random () * word.length);
            res += word[rand];
        }
        return res;
    }

    #checkPassword(password){
        if((password + '').length > 8){
            return password;
    
        }else{
            return this.#randomPass();
        }
    }

    static statMethod(){
        return `${this.agePerson}`;
    }

    get password(){
        return this.#password;
    }

    set password(password){
        return this.#password;
    }
}
let user = new Person('Akyl',20,'ascfdgfd566');// так мы можем правильно отобразить в  консоли
console.log(obj.print());
console.log(user.print());
console.log(user);
console.log(Person.agePerson);
Person.agePerson = 80;
console.log(Person.statMethod());
user.password = 'password123456';
console.log(user.password);

class Men extends Person{

    constructor(name,age,password,group){
        super(name,age,password);
        this.group = group;
    }

}

let boy = new Men('Atrey',19,'GodOfWar','30-1f');
console.log(boy);

//Создайте класс ,через конструктор создайте поля (name, surname,nameWork,capital),выводите через метод ( Гражданин surname,name,namework),создайте приавтный метод ,что должен иметь условие (3000 - обычный сотрудник, 100000 - элитный сотрудник , 10 000 000 - мажор)

class staff{

}