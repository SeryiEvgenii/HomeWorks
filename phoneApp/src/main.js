'use strict';

function PhoneApp() {
  this.dataBase = [
    {id:1, name:'Jack', surname:'Sparow', age:30, phone: '0964523168'},
    {id:2, name:'Bob', surname:'Sinclar', age:37, phone: '0504524361'},
    {id:3, name:'Jane', surname:'Snickers', age:24, phone: '0664524057'},
    {id:4, name:'Bob', surname:'Marley', age:45, phone: '0974337133'},
    {id:5, name:'Tommy', surname:'Li', age:20, phone: '0504523846'},
    {id:6, name:'Anna', surname:'Switty', age:25, phone: '0964523000'},
    {id:7, name:'Richard', surname:'Branson', age:50, phone: '0664133113'},
    {id:8, name:'Petr', surname:'Osipov', age:29, phone: '063455178'},
    {id:9, name:'Karina', surname:'Tui', age:27, phone: '0934536677'},
    {id:10, name:'Mick', surname:'Jager', age:70, phone: '0964223342'},
    {id:11, name:'Hue', surname:'Heffner', age:80, phone: '0954523010'},
    {id:12, name:'Andrey', surname:'КняZz', age:48, phone: '0504523008'}
  ];
};

// - Проверка, что телефонный номер содержит только числа;
PhoneApp.prototype.checkPhone = function(phone) {
  if (!isNaN(phone)) {
    return true;
  }else{
    alert('Используйте только цифры!');
  };
};
// - Преобразование телефонного номера из формата 0993378130 в (099) 33-78-130;
PhoneApp.prototype.phoneConvert = function(number) {
  let operator, firstTwo, secondTwo, lastThree;
  if(number.length == 10){
    operator = number.slice(0, 3);
    firstTwo = number.slice(3, 5);
    secondTwo = number.slice(5, 7);
    lastThree = number.slice(7);
    return `(${operator}) ${firstTwo}-${secondTwo}-${lastThree}`;
  }else{
    alert('Некорректная длинна номера телефона!');
  };
};
// - Добавление пользователей в объект;
PhoneApp.prototype.addContact = function(name, surname, age, phone) {
  let id = this.dataBase.length + 1;
  this.dataBase.push({id, name, surname, age, phone});
};
// - Удаление пользователя по имени, фамилии;
PhoneApp.prototype.delContact = function(name, surname) {
  this.dataBase = this.dataBase.filter((elem) => {
    return !(elem.name == name && elem.surname == surname);
  });
  return this.dataBase;
};
// - Поиск пользователей по имени - отображает всех пользователей с одинаковым именем;
PhoneApp.prototype.searchContact = function(name) {
  this.search = this.dataBase.filter((elem) => {
    return elem.name == name;
  });
  return this.search;
};
// - Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this );
PhoneApp.prototype.editContact = function(id, property, newValue) {
  this.dataBase.map((elem) => {
    if (elem.id == id) {
      elem[property] = newValue;
    };
  });
};
// - Сортировка пользователей по номеру телефона, фамилии, имени и т.д., по любому из свойств пользователя;
PhoneApp.prototype.sortContact = function(property) {
  this.dataBase.sort((a, b) => {
    if (a[property] > b[property]) return 1;
    if (a[property] < b[property]) return -1;
  });
  return this.dataBase;
};
// - Фильтр по указанному свойству;
PhoneApp.prototype.filterContact = function(property, value) {
  this.filterBase = this.dataBase.filter((elem) => {
    return elem[property] == value;
  });
  return this.filterBase;
};

const myApp = new PhoneApp();

myApp.addContact('Anna', 'Sparow', 25, '0506544536');
myApp.addContact('Karina', 'Dou', 23, '0636544309');
myApp.searchContact('Anna');
myApp.searchContact('Karina');
myApp.sortContact('name');
myApp.filterContact('age', 25);









