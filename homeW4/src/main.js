// 1.

function numbersBetween(a, b) {
	
	const arr = [];
	
	var c = b - 1;
	
	if(a > b || a == b || a == c){
		
		var message = "Показывать нечего! Первый аргумент должен быть меньше второго минимум на 2!"		
		arr[0] = message;
		
	}else{
		
		var first = a + 1;
		
		for(var i = first; i < b; i++){
			arr.push(i);
		};
		
	};
	
	return arr;
};

console.log(numbersBetween(1, 4));
console.log(numbersBetween(5, 11));
console.log(numbersBetween(12, 18));
console.log(numbersBetween(1, 15));


// 2.

function fizzBuzz(num) {
	
	for(let i = 0; i <= num; i++){
		
		var number = i;
		
		if((number%3 == 0) && (number%5 == 0)){
			console.log('FizzBuzz');
		} else 
			if(number%5 == 0){
			console.log('Buzz');
		} else 
			if(number%3 == 0){
			console.log('Fizz');
		} else 
			if((number%3 != 0) || (number%5 != 0)){
			console.log(number);
		};
		
	};
	
};

fizzBuzz(100);


// 3.

let arr = [1, null, undefined, 'str', {}, [], function() {}];

function typeOfArr(arg) {
	
	const newArr = [];
	
	for(let i = 0; i < arg.length; i++){
		var typeElem = typeof arg[i];
		newArr.push(typeElem);
	};

	return console.log(newArr);
	
};

typeOfArr(arr);


// @@SUPER@@.

let array = Array.from({ length: 35 }).map(
  (value, index) => (index % 2 ? { age: index + 2 } : { age: NaN })
);

function solution(arr) {
		
	for(let key in array){
				
		var elem = array[key];
		
		if(elem.age != elem.age){
			elem.unknownAge = true;
		};
	};
	
	console.log(array);
};

solution(array);


function newFunc(arg) {
	
	var newArray = [];
	
	for(let key in array){
				
		var el = array[key];
		
		if(el.unknownAge != undefined){
			newArray.push(el);
		};	
	};
	
	console.log(newArray);	
};

newFunc(array);
