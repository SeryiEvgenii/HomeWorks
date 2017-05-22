// 1.


/* let arr = [];

function addToArray(arrParam, newElem) {
	
	arr.push(arrParam);
	arr.push(newElem);
	
	console.log(arr);
};

addToArray(5, 6); */

let arr = [];

function addToArray(arrParam, newElem) {
	
	arr = [arrParam];
	
	var newParam = arr[arr.length] = newElem;
	
	console.log(arr);
};

addToArray(5, 6);


// 2.

function simpleObjectGenerator(param1, param2, param3) {
	
	var myObj = {
		argument1: param1,
		argument2: param2,
		argument3: param3
	};
	
	return myObj;
	
};

console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));


var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

function simpleObjectGenerator2(param1, param2, param3) {
		
	var myObj = {
		argument1: param1,
		argument2: param2,
		argument3: param3
	};
	
	return myObj;
	
};

console.log(simpleObjectGenerator2(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));


// 3.

var myName = { name: 'Oleg' };

function addNameToUser(newKey, newValue, userName) {
	
	var newObj = {};
	
	var key = newKey;
	
	newObj[key] = newValue;
	
	if(newObj.name === undefined) {
		newObj.name = myName.name;
	}
	 
	return newObj;
	
}

console.log(addNameToUser('family', '%Lustenko%', myName));

console.log(myName);


//@@ SUPER

function fizzBuzz(num) {
	
	if((num%3 == 0) && (num%5 == 0)){
		console.log('FizzBuzz');
	} else 
		if(num%5 == 0){
		console.log('Buzz');
	} else 
		if(num%3 == 0){
		console.log('Fizz');
	} else 
		if((num%3 != 0) || (num%5 != 0)){
		console.log(num);
	};
}

fizzBuzz(1);
fizzBuzz(2);
fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(15);
fizzBuzz(21);


//@@ SUPER 2

/* 

Напишите функцию, которая будет принимать 4 аргумента, последний всегда функция.
Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом

*/


function firstData(arg1, arg2, arg3, arg4) {
	
	var arr = [];
	
	arr[0] = arg1;
	arr[1] = arg2;
	arr[2] = arg3;
	
	arg4 = arr;

	console.log(arg4);
	
};

firstData(16, 'Good', 2017, function(){console.log(this)});











