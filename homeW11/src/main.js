'use strict';

/*
 *
 * Сделайте 4 объекта - не усложняйте, просто наследование через __proto__
 
 - Пользователь
 - Верифицированный пользователь
 - Гость
 - База данных
 
 
 - База хранит информацию о пользователях
 - Пользователи знают мыло админа
 - админ знает пароль от базы данных
 - Гости могут зарегистрироваться в базе данных
 *
 *
 * */
 
 
var user = {
  name: 'Jack',
  lastName: 'Sparow',
  password: '251huw1q2'
};
var admin = {
  name: 'administrator',
  adminEmail: 'admin@gmail.com'
};
var guest = {
  name: 'Guest'
};
var dataBase = {
  dataBasePassword: 'admin_7qwyn-data%$'
};

user.adminEmail = admin.adminEmail;
admin.__proto__ = dataBase;
dataBase.__proto__ = user;
user.__proto__ = guest;

console.log(user);
console.log(admin);
console.log(guest);
console.log(dataBase);