'use strict';

/*
TASK 0. Найдите числа которые повторяются нечетное количество раз в массиве
  solution([12, 23, 34, 12, 12, 23, 12, 45]) -> [34 45]
  solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]) -> [4 100 5000]
  solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]) -> [6 5 9 21]
  solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]) -> [8 16 23 42]
  solution([2, 2, 44, 44]) => []
*/

var solution = (array) => {
  let uniqueElem = {};
  let oddElements = [];
  array.forEach(elem => {
      uniqueElem[elem] = uniqueElem[elem] + 1 || 1;
  });
  for (var key in uniqueElem){
    if(uniqueElem[key]%2){
      oddElements.push(+key);
    }
  };
  console.log(oddElements);
};

solution([12, 23, 34, 12, 12, 23, 12, 45]);
solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100]);
solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]);
solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]);
solution([2, 2, 44, 44]);
  
  
/* TASK - 1
Распарсите строку и замените 
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'
 
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 
 Сделайте несколько экземпляров данной функции
 *
 *
 * */

const someWebpackModule = `module.exports = {
  context: %%HOMEDIR%,
    entry: {
      app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
  output: {
    path: %%HOMEDIR%% + '/app',
    filename: "dist/[%%APPNAME%%].js",
    library: '[%%APPNAME%%]'
  }
}`;

 var regExpString = (inVal, dir1, dir2, dir3) => {
  let homeDir = new RegExp('%%HOMEDIR%%', 'g');
  let appDir = new RegExp('%%APP_DIR%%', 'g');
  let appName = new RegExp('%%APPNAME%%', 'g');
  console.log(inVal.replace(homeDir, dir1).replace(appDir, dir2).replace(appName, dir3));
};

regExpString(someWebpackModule, './JavaScript-Basic', 'fixtures/src', 'app.js');


/*
 TASK - 2
 Сделайте разметку как скриншоте используя HTML
 вам необходимо использовать тэги(!)
*/

//       ../markup.html

/* 
TASK 3
 JavaScript =>
  Создать объект с методами, которые будут динамически генерировать DOM
  Это будет тест, который мы будем разрабатывать в следующих заданиях.
  Сейчас вам нужно только динамически создать html,
  методы должны храниться в одном объекте.
  Изначально на странице должен быть только <body>, 
  вызывая методы объекта нужно создать dom-элементы
*/

const app = {
  questions: {
    "Типы данных в JavaScript:": ['Массив', 'Строка', 'Объект', 'Числа'],
    "Что вернет выражение \"typeof null\":": ['Undefined', 'Null', 'Object', 'NaN', 'Infinity'],
    ".__proto__ используется для наследования в:": ['объектах', 'функциях-конструкторах'],
    "Какой из методов не вызывает функцию:": ['apply', 'bind', 'call'],
    "Сколько прототипов может быть у объекта:": ['1', '2', 'неограниченно', 'зависит от свойств объекта']
  },
  createForm: function(objTest){
    
    let form = document.createElement('form');
    let h1 = document.createElement('h1');
    h1.textContent = 'Тест по программированию';
    let ol = document.createElement('ol');
    let button = document.createElement('button');
    button.textContent = 'Проверить мои результаты';

    for(var key in objTest){
      let li = document.createElement('li');
      let div = document.createElement('div');
      ol.appendChild(li);
      li.textContent = key;
      document.body.appendChild(div);
      
      objTest[key].forEach((elem, i) => {
        let input = document.createElement('input');
        let label = document.createElement('label');
        let br = document.createElement('br');
        li.appendChild(div);
        div.appendChild(input);
        input.setAttribute('type', 'checkbox')
        div.appendChild(label);
        div.appendChild(br);
        label.textContent = elem;
      });
    };
    
    document.body.appendChild(h1);
    document.body.appendChild(form);
    document.body.appendChild(ol);
    form.appendChild(ol);
    form.appendChild(button);
  },
  render: function() {
    this.createForm(this.questions);
  }
};

app.render();
