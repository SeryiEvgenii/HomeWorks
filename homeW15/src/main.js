'use strict';

/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"
  solution("wyyga") // false
  solution("qwertyuioplkjhgfdsazxcvbnm") // true
  solution("ejuxggfsts") // false
  solution("qpwoeirutyalskdjfhgmznxbcv") // true
  solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv") // true
  solution("0123456789abcdefghijklmnop") // false
*/

// 1) DRY
// DO not reapeat yourself;
// 2) Вы должны учесть все возможные варианты

const solution = (str) => {
  let template = 'abcdefghigklmnopqrstuvwxyz'.split('');
  for (let i = 0; i < template.length; i++) {
    let reg = new RegExp(template[i]).test(str);
    if(!reg){
      console.log(false);
      return;
    };
  };
  console.log(true);
  return;
};

solution("wyyga"); // false
solution("qwertyuioplkjhgfdsazxcvbnm"); // true
solution("ejuxggfsts"); // false
solution("qpwoeirutyalskdjfhgmznxbcv"); // true
solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv"); // true
solution("0123456789abcdefghijklmnop"); // false

/*
 2. Напишите функция которая преобразовывает открывает скобки всех 
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов и объектов
 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 [1, [2, [ {a: "b"} ] ] ] => [1, 2, {a: "b"}]
 */

function openBraces(array) {
  let openArray = [];
  return array.reduce((prevElem, curElem) => {
    if(Array.isArray(curElem)){
      return prevElem.concat(openBraces(curElem));
    }else{
      for(let key in curElem){
        let arr = [];
        arr.push(key);
        arr.push(curElem[key]);
        return prevElem.concat(arr);
      };
    };
    return prevElem.concat(curElem);
  }, openArray);
};

console.log(openBraces([[1,2],[3,[4]],5, 10]));
console.log(openBraces([25,10,[10,[15]]]));
console.log(openBraces([1, {c: "d"}, [2, [{a: "b"}]]]));


/*
Виртуализировать таблицу, сделать рендер всей таблицы через JavaScript.
Второй макет.
https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html
*/

class ContactTable {
  constructor(){
    this.tableHead = ['Name', 'Surname', 'E-mail'];
    this.contacts = [
      {name:'Jack', surname:'Sparow', email:'sparrow_pirat@gmail.com'},
      {name:'Bob', surname:'Sinclar', email:'sinclar_bob@gmail.com'},
      {name:'Jane', surname:'Snickers', email:'JS@gmail.com'},
      {name:'Bob', surname:'Marley', email:'marleyBob@mail.us'},
      {name:'Tommy', surname:'Li', email:'tommyHL@gmail.com'},
      {name:'Anna', surname:'Switty', email:'sweetyAnn@mail.com'},
      {name:'Richard', surname:'Branson', email:'venus@gmail.com'},
      {name:'Petr', surname:'Osipov', email:'osipovP@mail.ru'},
      {name:'Karina', surname:'Tui', email:'kariTui@gmail.com'},
      {name:'Mick', surname:'Jager', email:'mickJager@mail.us'},
      {name:'Hue', surname:'Heffner', email:'playboy@gmail.com'},
      {name:'Andrey', surname:'Smoke', email:'smokyA@mail.ru'},
      {name:'Jack', surname:'Grey', email:'zhGr@gmail.com'},
      {name:'Nik', surname:'Vuychich', email:'nikV@mail.com'},
      {name:'Julia', surname:'Johnson', email:'julJ@gmail.com'},
    ];
  }
  
  new(tag) {
    return document.createElement(tag);
  }
  
  createTr() {
    return document.createElement('tr');
  }
  
  render() {
    const wrap = document.querySelector("#table-wrap");
    const table = this.new('table');
    const thead = this.new('thead');
    const tbody = this.new('tbody');
    const tr = this.createTr();
    wrap.appendChild(table);
    table.appendChild(thead);
    table.classList.add('table', 'table-hover', 'contacts');
    thead.appendChild(tr);
    
    this.tableHead.forEach(headItem => {
      const th = this.new('th');
      th.textContent = headItem;
      tr.appendChild(th);
    });    
    
    table.appendChild(tbody);
    
    this.contacts.forEach(contact => {
      const tr = this.createTr();
      tbody.appendChild(tr);
      
      for(let key in contact) {
        const td = this.new('td');
        td.textContent = contact[key];
        tr.appendChild(td);
      };
    });
  }
  
};

const createTable = new ContactTable();
createTable.render();