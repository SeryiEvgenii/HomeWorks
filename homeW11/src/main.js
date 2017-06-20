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
  email: {adminEmail: 'admin@gmail.com'}
};
var guest = {
  name: 'Guest'
};
var dataBase = {
  password: {passDataBase: 'admin_7qwyn-data%$'},
  regUser: { 
    regNewUser: function() {
      console.log("Пользователь зарегистрирован");
      dataBase.__proto__ = guest;
    }
  }
};

user.__proto__ = admin.email;
dataBase.__proto__ = user;
admin.__proto__ = dataBase.password;
guest.__proto__ = dataBase.regUser;

console.log(user);
console.log(admin);
console.log(guest);
console.log(dataBase);
