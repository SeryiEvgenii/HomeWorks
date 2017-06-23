'use strict';

/*
 *
 * Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object {
 *   req: Object
 *     PORT: number
 *     url: string
 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function
 *
 *
 * listen(PORT, host) - в консоле должна отобразится надпись
 * "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */

function Http() {};

var ctx = {
  req: {
    password: '44rw588q6wswsd',
  },
  PORT: 24,
  url: '/login/',
  res: {
    resque: 'resque connecting'
  },
  status: 1,
  message: 'Server will be run!',
  header: {
    "content-type": "application/json"
  }
};
var next = function() {
  console.log('This is second param function!');
};
 
Http.prototype.createServer = function(arg) {
  this.fn = arg;
  return this;
};
Http.prototype.listen = function(PORT, host) {
  console.log(`Server running on https://${host}:${PORT}`);
  this.fn(ctx, next);
  next();
  return this;
};

const server = new Http().createServer(function(ctx, next) {
  console.log(ctx);
}).listen(3000, 'localhost');


// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплатой, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human


function Human(name, age, sex, height, weight){
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.height = height;
  this.weight = weight;
};
function Worker(name, age, sex, height, weight, place, salary) {
  Human.apply(this, arguments);
  this.placeWork = place;
  this.salary = salary;
  this.work = function() {
    console.log('Работаю');
  };
};
function Student(name, age, sex, height, weight, study, scholarship) {
  Human.apply(this, arguments);
  this.study = study;
  this.scholarship = scholarship;
  this.view = function() {
    console.log('Смотрю сериалы');
  };
};
Worker.prototype = Object.create(Human.prototype);
Student.prototype = Object.create(Human.prototype);

var jack = new Worker('Jack', 29, 'man', 170, 75, 'devPro', '1500$');
var anna = new Worker('Anna', 25, 'woman', 170, 65, 'Tui', '550$');
var tommy = new Student('Tommy', 18, 'man', 185, 80, 'EasyCode', '50$');
var sid = new Student('Sid', 17, 'man', 165, 60, 'Karazin', '35$');

console.log(jack);
console.log(anna);
console.log(tommy);
console.log(sid);


// @SUPER

/*
 * TASK 0
 * Создайте функцию обертку над другой функцией
 * Каждый раз при вызове внутренней функции в консоле будут отображаться аргументы функции
 * которую мы обернули
*/

function innerFunc(arg){
  return `${arg}, my frend!`;
};
function wrapFunc(a) {
  console.log(innerFunc(a));
};

wrapFunc('Hello');
wrapFunc('OK');
wrapFunc('Goodluck');