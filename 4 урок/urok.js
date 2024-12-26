//DOM
let obj = {
    name:'uluk'
}

let h1 = document.getElementById('h1');
let tag = document.getElementsByTagName('h2');
let clas = document.getElementsByClassName('h1');

let query1 = document.querySelector('h2');//ищут по тегу
let query2 = document.querySelector('#h2');//ищут по id
let query3 = document.querySelector('.h2');//ищут по class

console.log(h1);
console.log(tag[0]);
console.log(clas[1]);

console.log(h1.getAttribute('id'));//увидеть в атрибуте
h1.setAttribute('class','changeText');//меняет атрибут
h1.removeAttribute('id');//удаляет атрибут

h1.textContent = 'Cange Text';//меняет текст
h1.innerText = 'change';//меняет стили
h1.innerHTML = '<a class="link" href="http://www.google.com/">Cange</a>';//нужно чтобы внести изменения можно еще добавить теги
h1.style.backgroundColor = 'rgb(10 ,6 , 68)';//меняет стили
h1.style.paddingLeft = '150px';

h1.className = 'link';

let p = document.createElement('p');
p.textContent = 'Create nev tag p';
box.append(p);
box.remove(p);

let btn = document.getElementById('btn');//кнопка
let inp = document.getElementById('inp');
btn.onclick = () => {
    // tag[0].style.color = 'aqua'
    tag[0].setAttribute('class', 'aqua')
    alert('была нажата кнопка!')
}

// btn.addEventListener('mouseover', () => {
//     alert('наведено на кнопку!')
// })
inp.onchange = (event) => {
    console.log(event.target.value);
}