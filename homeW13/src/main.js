'use strict';

const someWebpackModule = `module.exports = {
    context: '',
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

/* Распарсите строку и замените TASK - 1
 %%HOMEDIR%% -> './JavaScript-Basic
 %%APP_DIR%% -> 'fixtures/src
 %%APPNAME%% -> 'app.js'
 
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 
 Сделайте несколько экземпляров данной функции
 *
 *
 * */

function parseString(inVal, oldVal, newVal) {
  while(inVal.includes(oldVal.forEach((elem) => {return elem}))) {
    inVal = inVal.replace(oldVal.forEach((elem) => {return elem}), newVal.forEach((elem) => {return elem}));
  };
  
  console.log(inVal);
};

var oldVal = ['%%HOMEDIR%%', '%%APP_DIR%%', '%%APPNAME%%'];
var newVal = ['./JavaScript-Basic', 'fixtures/src', 'app.js'];

parseString(someWebpackModule, oldVal, newVal);


/*
 * TASK - 2
 *
 * Перепишите Homework 12 - TASK 1 используя class
 *
 * */

var ctx = {
  req: {
    PORT: 24,
    url: '/login/',
  },
  res: {
    status: 1,
    message: 'Server will be run!',
    header: {
      "content-type": "application/json"
    }
  }
};
var next = function() {
  console.log('This is second param function!');
};

class Http{
  constructor() {}
	createServer(arg) {
    this.fn = arg;
    return this;
  }
  listen (PORT, host) {
    console.log(`Server running on https://${host}:${PORT}`);
    this.fn(ctx, next);
    next();
    return this;
  }
};

const server = new Http().createServer(function(ctx, next) {
  console.log(ctx);
}).listen(3000, 'localhost');

/*
 *
 * TASK - 3
 *
 * Измените startTimer таким образом, чтобы числа отобразились последовательно
 * с 10 до 1
 * Изменять функцию serverResponse и шапку цикла - нельзя
 *
 * */

let startTimer = () => {
  let timer = 1000;
  let serverResponse = i => {
    return setTimeout(function() {
      console.log('zzzz');
      console.log(i);
    }, (timer = timer / 2));
  };
  for (let i = 10; i >= 1; i--) {
    timer = timer * 0;
    serverResponse(i);
  }
};

startTimer();

// @ SUPER

/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query
 * 
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз), 
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */

class DataBase {
  constructor() {}
  query() {
    let counter = 5;
    if(this.timeout){
      clearTimeout(this.timeout);
      clearInterval(this.interval);
    };
    this.interval = setInterval(function(){
      if(!counter == 0){
        console.log(counter--);
      }else{
        clearTimeout(this.timeout);
        clearInterval(this.interval);
      }
    }, 1000);
    this.timeout = setTimeout(function() {
      console.log('The web server is down');
    }, 5000);
  }
}

const dataBase = new DataBase();
dataBase.query();
