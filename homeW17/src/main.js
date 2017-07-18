/*
 TASK 0
 Отобразите всех лидеров массива.
 *
 * Элемент лидер, если он больше, чем все последующие элементы после него (элементы справа).
 * Последний элемент всегда лидер.
 * Например в массиве [16,17,4,3,5,2] лидеры 17, 5 и 2.
 *
 * */

const solution = array => {
  let filteredArray = array.filter((elem, i) => {
    let sliceArray = array.slice(i);
    let maxElem = Math.max.apply(null, sliceArray);
    if (elem == maxElem) return elem;
  }).filter((el, i, arr) => arr.indexOf(el) == i);
  console.log(filteredArray);
};

solution([16, 17, 4, 3, 5, 2]); // [17, 5, 2]
solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8]); // [67, 45, 35, 8]
solution([12, 10, 12, 8, 7, 6]); // [12, 8, 7, 6]
solution([1, 2, 3, 4, 5, 4]); // [5, 4]


/* TASK 1
 * Сделайте карусель.
 * При клике по кнопке "<=" показывается первое изображение по "=>" последнее.
 *
 *
 * Сделайте слайдер - бесконечным, после третьего изображения снова первое.
 * Добавьте внизу цифры с текущим активным изображением.
 *
 * 
 * 
 * @SUPER -> @front-end
 * Уберите в стилях li - position:absolute.
 * изменяйте свойство transform:translate3d у .carousel, добавьте transition
 * и сделайте чтобы картинки передвигались влево и вправо
 *
 * @PUPER -> переход к первой картинка
 *
 * */


/*
* TASK 2
*
* Сделайте класс, который будет иметь метод topStyle.
* Метод topStyle принимает объект с CSS стилями и добавляет в <head> новый элемент с данными стилями
*
* */

class CreateStyle{
  constructor(){}
  
  topStyle(elemName, styleObject){
    
    let style = document.createElement('style');
    let head = document.querySelector('head');
    head.insertAdjacentElement('beforeEnd', style);
    let styleObj = {};
    
    for(let key in styleObject){
      let camelCase = `${key}`;
      let propertyArray = [...camelCase]; 
      propertyArray.forEach((letter, i) => {
        if(letter.toUpperCase() == letter){
          propertyArray[i] = `-${letter.toLowerCase()}`;
        }
      });
      let lowerCase = propertyArray.join('');
      styleObj[lowerCase] = styleObject[key];
    };
    
    let cssProperty = '';
    for(let k in styleObj){
      cssProperty += `${k}: ${styleObj[k]}; `;
    };
    style.innerHTML += `.${elemName}{${cssProperty}}`;
  }
};

const setupStyle = new CreateStyle();
setupStyle.topStyle('fetch', {backgroundColor:'blue', marginLeft: '25px', padding: '50px'});


/* @SUPER
 *
 * Напишите функцию которая будет преобразовывать CSS-свойство в 
 * ликвидное JS свойство
 *
 * background-color -> backgroundColor
 * margin-left -> marginLeft
 * flex-basis -> flexBasis
 *
 * ...etc
 *
 * сделать через regExp
 *
 * */
 
const cssToJs = css => {
  if(css == 'float'){
    console.log('cssFloat')
  }else{
    let camelCase = css.replace(/(?:^\w|\b\w)/g, function(letter, index) {
      if(index == 0) {
        return letter.toLowerCase();
      }else{
        return letter.toUpperCase();
      }; 
    }).replace(/-/g, '');
    console.log(camelCase);
  };
};

cssToJs('float');
cssToJs('background-color');
cssToJs('margin-left');
cssToJs('border-left-style');


/* 
Нужно визуализировать keypad.html -> keypad.js
Нужно визуализировать index.html -> app.js
Структура виртуализации:
 
 - header - один блок 
 - main - второй блок
 >------ Это 2 разных класса
 У каждого из классов, рендер на странице запускается при помощи метода .render
innerHTML по максимуму
https://aleksandra-maslennikova.github.io/telephone-book/keypad.html
Сделайте чтобы при нажатии на кнопку цифра отобразилась в <span class="numbers">
*/


/*
https://aleksandra-maslennikova.github.io/telephone-book/index.html
По клику по заголовку таблицы, таблица сортировалась по соответствующему свойству
*/