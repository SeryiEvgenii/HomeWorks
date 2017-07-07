'use strict';

/* 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив 
 в двухмерный, а если массив двухмерный, тогда в трехмерный массив
 
 
 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
 */
 
const solution2 = array => {
  
  let newArray = array.reduce((prevElem, curElem) => {
    return prevElem.concat(curElem);
  }, []).sort();
  
  if(array.length%2 == 0){
    let array3d = [];
    for(let i = 0; i < newArray.length; i+2){
      array3d.push(newArray.splice(0, 2));
    };
    console.log(array3d);
  }else{
    let array2d = [];
    for(let i = 0; i < newArray.length; i+3){
      array2d.push(newArray.splice(0, 3));
    };
    console.log(array2d);
  };
  
};

solution2([[1, 3, 5], [2, 4, 6]]);
solution2([[1, 'a'], [2, 'b'], [3, 'c']]);
solution2([[]]);


/*
 Визуализируйте массив, если в коллекции есть свойство children,
  тогда создайте вложенный лист
 name - свойство h1
 children ul->li
 Используйте innerHTML
 */

const navigation = [
  { name: 'Главная' },
  {
    name: 'Каталог',
    children: [
      {
        name: 'Компьютеры',
        children: [
          { name: 'Ноутбуки' },
          { name: 'Планшеты' }
        ]
      }
    ]
  },
  { name: 'Профиль' }
];

// const navigation = [{name: 'Главная'}, {name: 'Каталог', children: [{name: 'Компьютеры', children: [{name: 'Ноутбуки'}, {name: 'Планшеты'}]}]}, {name: 'Профиль'}];

// h1 > h1 > ul > li > h1 > ul > li > h1 > h1

/* 
<h1>Главная</h1>
<h1>Каталог</h1>
<ul>
  <li><h1>Компьютеры</h1></li>
  <ul>
    <li><h1>Ноутбуки</h1></li>
    <li><h1>Планшеты</h1></li>
  </ul>
</ul>
<h1>Профиль</h1> 
*/

const createTitle = text => `<h1>${text}</h1>`;

const createUl = children => {
  let ul = '<ul>';
  
  children.forEach(elem => {
    ul += '<li>' + createTitle(elem.name) + '</li>';
    if(elem.children){
      ul += createUl(elem.children);
    };
  });
  
  ul += '</ul>';
  return ul;
};

const visualArray = arr => {
  let html = '';
  
  arr.forEach(elem => {
    html += createTitle(elem.name);
    if(elem.children){
      html += createUl(elem.children);
    };
  });
  
  let section = document.createElement('section');
  document.body.appendChild(section);
  section.innerHTML = html;
  console.log(html);
};

visualArray(navigation);

/*  ПРИЛОЖЕНИЕ  */
// 1. Форкните репозиторий Саши.
// Добавьте скрипт который будет рисовать всю страницу с таблицей.
// https://github.com/aleksandra-maslennikova/my-phone-book
// удалите на всех страницах bootstrap.js, jquery.js
// по максимуму

// 2. Напишите функцию, которая будет получать последнего родителя
// у элемента, но не body

// 3. При нажатии на кнопку если были выбраны правильные ответы,
// отображайте "ПРАВИЛЬНО" или не правильно
// или отображайте значек X или галочку, возле вопроса
