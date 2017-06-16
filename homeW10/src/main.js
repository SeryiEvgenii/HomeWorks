'use strict';

/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

let y = 5;
let x = () => y;

let z = t => {
  let y = 5;
  t();
};

//console.log(y);

z(x);

/*

Выражение z(x) ничего не вернет.

Переменная "x" равняется функции, которая вернет число 5 (число 5 попадает в данную функцию из внешней переменной "y").

Переменная "z" равняется функции "t", у которой есть локальная переменная "y", которая равняется "5", но она никак не влияет на ответ по задаче, т.к. не используется.

Затем мы запускаем функцию "t", которая ничего не возвращает, но у которой аргумент = 5 (из переменной "x").

*/


/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать передаваемую строку в html тэг
 *
 *
 * */

let $ = function(arg) {
  let arrayArg = [arg];
  let tagArray = arrayArg.map(elem => `<${elem}></${elem}>`).join('');
  return tagArray;
};

let createBODY = $('body');
let createDIV = $('div');
console.log(createBODY); // <body></body>
console.log(createDIV); // <div></div>

/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
  // obj.method().method().method()
  ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */

function closure() {
  let cache = '';
  return function(joinString) {
    return cache += joinString;
  }
};

var buffer = closure();

var ezjQuery = {
  add: function(arg) {
    let arrayArg = [arg];
	let tagString = arrayArg.map(elem => `<${elem}></${elem}>`)//.join('');
	buffer(tagString);
	console.log(buffer(tagString));
	return this;
  }
};

ezjQuery
  .add('body') //<body></body>
  .add('div') //<body></body><div></div>
  .add('h1'); //<body></body><div></div><h1></h1>

/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий тэг помещался внутри
 * предыдущего !
 --- 
 * И добавьте объекту ezjQuery метод render, который будет возвращать 
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать информацию внутри тэга
 *
 *
 */

var ezjQuery = {
  funcCache: function() {},
  render: function() {
	let arr1 = [];
	let arr2 = [];
    for(let key in this.funcCache){
		arr1.push(key);
		arr2.push(this.funcCache[key]);
	};
	arr2.reverse();
	let concatArr = arr1.concat(arr2).join('');
	console.log(concatArr);
	this.funcCache = {};
  },
  add: function(...arg) {
    let arrayArg = arg;
	if(arg.length > 1){
	  let secondArg = arg[1];
	  let slice = arg.slice(0, 1);
	  let openTag = slice.map(elem => `<${elem}>`).join('');
	  let closeTag = slice.map(elem => `</${elem}>`).join('');
	  this.funcCache[openTag] = closeTag;
	  this.funcCache[''] = secondArg;
	}else{
	  let openTag = arrayArg.map(elem => `<${elem}>`).join('');
	  let closeTag = arrayArg.map(elem => `</${elem}>`).join('');	
	  this.funcCache[openTag] = closeTag;
	}
	return this;
  }
};

// example
var helloList = ezjQuery.add('body') // <body></body>
  helloList = ezjQuery.add('div') // <body><div></div></body>
  helloList = ezjQuery.add('ul') // <body><div><ul></ul></div></body>
  helloList = ezjQuery.add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
  helloList = ezjQuery.render();
console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
//  Обратите внимание, что после вызова render создание строки началось сначала

var bodyDiv = ezjQuery
  .add('body') //<body></body>
  .add('div') //<body><div></div></body>
  .render();
console.log(bodyDiv); //<body><div></div></body>

// Для выполнивших все задания
// сделайте document.write(helloList) увидите результат :)

// @SUPER
/*
 * Переименуйте объект ezjQuery в $.
 * Создание перевого метода должено быть без метода
 *
 * $('body').add('li', 'hi').render() // <body><li>hi</li></body>
 *
 * */
 
