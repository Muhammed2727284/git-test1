var a = 10;

{
    var b = 20;
    let m = 20;
    const com = 60;
    console.log(m);
}

let m = 50;
console.log(b);
console.log(m);
//console.log(com);

var fun = function(){
    console.log(5 - 2);
}

var fun = 10;

console.log(fun);

const foo = function(){
    console.log(5 - 3);
}

// foo = 50;

console.log(foo);

//declaration
frost();

function frost(){
    console.log('frost');
}

//expression
//fron() если в начале это написать то ошибка выйдет
const fron = function(){
    console.log('fron');
}
fron()

const arrow = (a = 'Nothing', b = 0) => {
    console.log('arrow', a, b);
}

arrow(20);

//Spread операторы
let mas = [1, 2, 3, 4];

console.log([...mas,30, 50, 90]);
let obj = {name:"Muhammed", age: 20}

obj = {...obj, lern: "OshSu"};
console.log(obj);

let masOb = [{name:'Dina'},{name:'Roma'}]

masOb = [...masOb,{name:'Peri'}];
console.log(masOb);

const fool = (b, c, ...a) => {
    console.log('Massive', a, b, c);
}
fool(1, 2, 3, 4, 5);



//
let mas1 = [1, 2, 3, 4];

let [num1, num2, num3, num4] = mas1;
console.log(num1);
console.log(nim2);

let = {name: 'Muhammed',age:10,surname:'Naturaliev'};
let {name: name1,age:age1,surname:surname1} = obj1;
console.log(name1);

//строковые шаблоны и разделители
let man = 'Hello';
let numb = 20;
console.log(man + "world" + numb);
console.log(`${man} World ${numb}`);