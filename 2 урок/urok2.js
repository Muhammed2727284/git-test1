let р = 0;

while(1 < 4){
    console.log('While');
    p ++;
    //i = i + 1; это вариант написания
    // i += 1;  это вариант написания
}



let i = 0;

while(i < 4){
    document.write(`<div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/en/e/ee/Front_%26_Back_Face_of_iPhone_16_Pro_Max.png"
            alt=""
            <h1>${i * 900}$</h1>
            <p>Iphone X</p>
        </div>`)
    i++;

}



do {
    console.log('Hello');
    i++;
} while (i < 3);


let prom = prompt('Введите число');

for(let j = 0; j < prom; j++){
    console.log('This is for', j);

}

//Массивы
let mas = Array();
let mas1 = [12, 'hello' , true,[2,3,4]];

console.log(mas1);
console.log(mas1[2]);
console.log(mas1[0]);

for (let item in mas1){//выводим каждый элеменет
    //console.log(item);
    console.log(mas1[item]);
}

//создадим код на котором разные картинки но описание тоже самое

let photo = [
    'https://upload.wikimedia.org/wikipedia/en/e/ee/Front_%26_Back_Face_of_iPhone_16_Pro_Max.png',
    'https://online72.ru/upload/iblock/648/7lhis9h8tw8y98tpqbny3mayvt3mrprw.jpg',
    'https://avatars.mds.yandex.net/i?id=6bae5f96674c57e51e607f9cffc94971394f2a1f-5563700-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=9696e1402c8b69dfa386eba2fd9b6aa0147affbc-8906573-images-thumbs&n=13',

]

for(card in photo){
    document.write(`<div
    class"card">
            <img src="${photo[card]}" alt="">
            <h1>900$</h1>
            <p>Iphone</p>
        </div>`)

}

//Объекты
let obj1 = Object();

let obj = {
    name:'Muhammed',
    age:25,
    surname:"Акимов",
    work: {
        nameCompany:'StroyCompany',
        location:'Osh',
    }
}
console.log(obj);

let Ruchka = {
    Prise: 50 +'com',
    color: 'blue',
    length: 18 +'см',
    manufacturer: {
        nameCompany: 'Wein' ,
        ageCompany: 15,
    }
}
console.log(Ruchka);
console.log(Ruchka['Prise']);
console.log(Ruchka.color);
console.log(Ruchka.Prise);
console.log(Ruchka.manufacturer.ageCompany)


// let prod = [
//     {
//         img: 'https://online72.ru/upload/iblock/648/7lhis9h8tw8y98tpqbny3mayvt3mrprw.jpg' ,
//         price: '900$',
//         title: 'iphone X',
//         description: 'Beutuful phon best phone'
//     },
//     {
//         img: 'https://online72.ru/upload/iblock/648/7lhis9h8tw8y98tpqbny3mayvt3mrprw.jpg' ,
//         price: '950$',
//         title: 'iphone IX',
//         description: 'Beutuful phon best phone'
//     },
//     {
//         img: 'https://online72.ru/upload/iblock/648/7lhis9h8tw8y98tpqbny3mayvt3mrprw.jpg' ,
//         price: '1000$',
//         title: 'iphone XI',
//         description: 'Beutuful phon best phone'
//     },
//     {
//         img: 'https://online72.ru/upload/iblock/648/7lhis9h8tw8y98tpqbny3mayvt3mrprw.jpg' ,
//         price: '1100$',
//         title: 'iphone 12',
//         description: 'Beutuful phon best phone'
//     },
// ]

// for(card in prod){
//     document.write(`<div class="card">
//         <img src="${prod[card].img}" alt=""/>
//         <h1>${prod[card].price}</h1>
//         <p>${prod[card].title}</p>
//         <p>${prod[card].description}</p>
//     </div>`)
// }
