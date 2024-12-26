//1.Функции declaration
function math(){
    console.log('Hello function');
}
math();//вызываем функцию

let num = 10
console.log(num);

//2.Функции expression
const text = function(){
    console.log('Its expression func');
}
text();//вызываем функцию

//3.Стрелочная функция
const arrow = () =>{
    console.log('Its arrow function');
}
arrow();//функцию вызываем

//пример:
let num1 = 10;
let num2 = 20;
console.log(num1 + num2);

num1 = 50;
num1 = 40;
console.log(num1 + num2);

num1 = 600;
num1 = 400;
console.log(num1 + num2);

//а это более облеченный вариант:
const mathSum = (num1, num2) => {
    console.log(num1 + num2);
}
mathSum(10,20);
mathSum(50,40);
mathSum(600,400);

//Вычислите из 3 числа среднее значение 1,2,3 = 2, (A + B + C) / 3;

const Muh = (a,b,c) => {
    console.log('Hello function', (a + b + c) / 3);
}
Muh(1 , 2 , 3 );

//выведите false если число не четное,а иначе true
const average = (num) => {
    //1 способ
    console.log(num % 2 == 0? true : false);
    //2 способ
    if(num % 2 === 0){
        console.log(true);
    }else{
        console.log(false);
    }

}
average(5); 

const prim = () => {
    return 'Its return';
}

console.log(prim());
document.write(prim());

// решение примера с выведением ответа в коноль и браузер и сообщением :
const avg = (a,b,c) =>{
    return (a + b + c) / 3;//возвращает знечение но ни где не выводит   
}
avg(20,40,60); // ни где не выйдет ответ
console.log(avg(1,3,8)); //выдает значение в консоли
alert(avg(1,3,8)); //выводит значение сообщением
document.write(avg(5,7,10)); //выводит значение в браузере н

//Callback function

const col = (callback) => {
    return callback() / 3;
}

console.log(col(() => {return 1 + 2 + 3}));

//Анонимная функция
let hot = 50

const fun = (a)  => {
    let cool = 50
    console.log(cool + hot);
    return(b) => {
        return a + b;
    }
    //После return не стоит создавать новые элементы!
}
console.log(fun(5)(9));
//более развернутый вид:
const foo = fun(5);
console.log(foo(9));


//Методы объектов и массивов - это функция где хранится внутри объекта
let obj = {
    name:' Muhammed',
    age: 22,
    work: 'Geeks',
    show: function (){
        return 'Hello metod'
    },
    [key]: '102251'
}

delete obj.work //удаляет данные из объекта
console.log(obj);
console.log(obj.show());
console.log(obj[key]);
console.log(Object.keys(obj));//показывает ключи в массиве
console.log(Object.values(obj));//показывает элементы в массивы
console.log(Object.entries(obj));//показывает всё в массиве
console.log(Object.freeze(obj));//отвечает за изменение данных
obj.name = 'Admin'
console.log(obj);

let mas = [ 1 ,2 , 3]
mas[0] = 10;
delete mas[2];//удаляет определенный элемент по индексу
mas.push(10);//добавляет в конец
mas.unshift(2)//добавляет в начало
mas.pop();//удаляет конец
mas.shift();//удаляет начало

let mas = [1, 2, 3]

mas[0] = 10;
delete mas[2];// удаляет определенный элемент по индексу
mas.push(10); // добавляет в конец
mas.unshift(2) // добавляет в начало
mas.pop(); // удаляет конец
mas.shift(); // удаляет начало

console.log(mas.slice(1,2));
console.log(mas.splice(1,2));
console.log(mas.concat([1, 2, 3]));


let mas1 = [1, 2, 3, 4]
console.log(mas1.map((elem) => {
    return elem + 1
}));

console.log(mas1.filter((elem) => {
    return elem % 2 == 0
}));

