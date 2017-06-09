'use strict';

/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные ей аргументы
 * и прибавлять их в строку,
 * и отображать в консоле всю строку
 *
 * 
 * */

function solution1() {
  let cache = '';
  return function(){
    return console.log(cache += arguments[0] + ' ');
  }
}

let stringBuffer = solution1();

stringBuffer('Замыкания'); // Замыкания
stringBuffer('Использовать нужно'); // Замыкания Использовать нужно
stringBuffer('Привет'); // Замыкания Использовать нужно Привет
// вызываем много раз

/*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку из скобочек 
 * и посчитайте, что все скобочки закрываются корректно
 *
 * */

function validBraces(str) {
	
	let lengthStr = str.length,
	    firstPartStr = lengthStr / 2,
	    array = [...str],
	    arr = str.split('', firstPartStr),
	    arr2 = array.splice(firstPartStr, lengthStr),
		arr2Reverse = [];
		
		
	for(let i = 0; i < arr2.length; i++) {
		let rev = arr2[i].split('').join('');
		arr2Reverse.push(rev);
	};
	
	//console.log(arr)
	//console.log(arr2)
	//console.log(arr2Reverse)
	
	if(lengthStr%2 == 0){
		
		
	}else{
		console.log(false)
	}
	
};



/*
 *
 * TASK 3
 * Напишите функцию которая будет принимать 1 аргумент - функцию
 *
 * Отрефакторите код таким образом, чтобы сообщение 'THE LAST LAST comment',
 * отобразилось в консоле последним
 *
 * */

function makeCallback(fn) {
  let count = 10;
  for (let i = 1; i <= count; i++) {
    setTimeout(function() {
      console.log(i);
	  if(i == count){
		fn();
	  };
    }, i * 1);
  };
};

makeCallback(function() {
  console.log('THE LAST LAST comment');
});

// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму 
 * всех натуральных чисел
 * sum(5) //5+4+3+2+1
 * 
 * Вычисления должны кешироваться, если в функцию попадает закешированное 
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * */
 
function sumFromCache(num) {
	let cache = {};
	return function(num){
		if(!(num in cache)){
			let sumOfNum = 0;
			for(let i = 0; i <= num; i++){
				sumOfNum += i;
			};
			cache[num] = sumOfNum;
			console.log(sumOfNum, 'Значение кешировано');
		}else{
			console.log(cache[num], 'Значение взято из кэша');
		};
	};
};

let sum = sumFromCache();

sum(5); // 15 Значение кешировано
sum(5); // 15 Значение взято из кэша

sum(6); // 21 Кешировано
sum(6); // 21 Значение взято из кэша
sum(5);
sum(6);
sum(8);
sum(8);