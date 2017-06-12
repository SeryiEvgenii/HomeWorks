<<<<<<< HEAD
﻿/*
 *
 * TASK 1
 * Посчитайте количество букв а, в передаваемом параметре
 *
 * */

let randomString = 'aaa b a w c ';

let user = {
  name: 'Albina'
};

let javaScript = {
  html: 'JavaScript'
};

function countLetterA(arg) {
	
	let count = 0;
	let sym = 'a';
	arg.split();
	
	for(let i = 0; i < arg.length; i++) {
		if(arg[i] === sym){
			count++;
		};
	};
	
	return count;
}

console.log(countLetterA(randomString)); // 4
console.log(countLetterA(user.name + javaScript.html)); // 3


/*
 *
 * TASK 2
 * Вам дано предложение, вам необходимо перевернуть каждое слово
 * в предложении в обратном порядке
 *
 * */


function reverseEachWord(arg) {
	
	let array = arg.split(' ');
	
	let newArray = [];
	
	for(let i = 0; i < array.length; i++) {
		
		let rev = array[i].split('').reverse().join('');
		
		newArray.push(rev);
		
	};
	
	let reverseSentence = newArray.join(' ');

	return reverseSentence;
}

console.log(reverseEachWord('You don\'t have to do anything special to begin using the DOM. Different browsers have different implementations of the DOM'));
// uoY t'nod evah ot od gnihtyna laiceps ot nigeb gnisu eht .MOD tnereffiD sresworb evah tnereffid snoitatnemelpmi fo eht MOD

console.log(reverseEachWord('The Document Object Model (DOM) is a programming interface for HTML and XML documents'));
// ehT tnemucoD tcejbO ledoM )MOD( si a gnimmargorp ecafretni rof LMTH dna LMX stnemucod


=======
﻿ 'use strict';

/*
 *
 * TASK 1
 * Посчитайте количество букв а, в передаваемом параметре
 *
 * */

let randomString = 'aaa b a w c ';

let user = {
  name: 'Albina'
};

let javaScript = {
  html: 'JavaScript'
};

function countLetterA(arg) {
	
	let count = 0;
	let sym = 'a';
	arg.split();
	
	for(let i = 0; i < arg.length; i++) {
		if(arg[i] === sym){
			count++;
		};
	};
	
	return count;
}

console.log(countLetterA(randomString)); // 4
console.log(countLetterA(user.name + javaScript.html)); // 3


/*
 *
 * TASK 2
 * Вам дано предложение, вам необходимо перевернуть каждое слово
 * в предложении в обратном порядке
 *
 * */


function reverseEachWord(arg, bul) {
	
	let array = arg.split(' ');
	let newArray = [];
	let newArr = [];
		
	for(let i = 0; i < array.length; i++) {
		let rev = array[i].split('').reverse().join('');
		newArray.push(rev);
	};
		
	let reverseSentence = newArray.join(' ');
	
	if(bul != true){
		
		return reverseSentence;
		
	}else{
		
		let reverseFalse = arg.split('');
			reverseFalse.reverse();
			
		return reverseFalse.join('');
	}

};

console.log(reverseEachWord('You don\'t have to do anything special to begin using the DOM. Different browsers have different implementations of the DOM'));
console.log(reverseEachWord('The Document Object Model (DOM) is a programming interface for HTML and XML documents'));


/* TASK 3
 * Добавьте в функцию reverseEachWord второй параметр,
 * данный параметр булево, если true - тогда предложение так же 
 * переворачиваются в обратном порядке
 * */

console.log(reverseEachWord('You don\'t have to do anything special to begin using the DOM. Different browsers have different implementations of the DOM', true));
console.log(reverseEachWord('The Document Object Model (DOM) is a programming interface for HTML and XML documents', true));
console.log(reverseEachWord('Hi my Name is', false));



/* TASK 3
 * Посчитайте сколько одинаковых слов в предложении.
 * Функция должна возвращать объект у которого свойства 
 * это повторяющиеся слово,
 * а значение это количество повторений
 * */
 
 
// РЕШЕНИЯ НЕ НАШЕЛ (((

function wordCounter(sentence) {
	
	let sentenceSplit = sentence.split(' ')
	
	//console.log(sentenceSplit);
	
	let newObj = {};
		
	newObj = sentenceSplit.map(function(elem, index, arr){	
		
		newObj[elem] = elem;
		return newObj;
		
		console.log(newObj);
		
	});
		
	//console.log(newObj);
		
	//console.log(arr);
	
	return newObj;
}

//console.log(wordCounter('Both Java and Java Script is programming and programming OOPBased Language'));
 


let listOfCompanys = [
  {
    "company": "ASIMILINE",
    "name": {
      "last": "Watkins",
      "first": "Lindsay"
    },
    "eyeColor": "brown",
    "age": 20,
    "picture": "http://placehold.it/32x32",
    "balance": "$1,091.09",
    "isActive": true,
    "guid": "294814e3-4c89-428f-b0c9-da5c4c37ea5e",
    "index": 0,
    "_id": "584babb6eeb4137cf14c37a3"
  },
  {
    "company": "ENJOLA",
    "name": {
      "last": "Price",
      "first": "Greene"
    },
    "eyeColor": "brown",
    "age": 39,
    "picture": "http://placehold.it/32x32",
    "balance": "$3,533.55",
    "isActive": true,
    "guid": "e7b0824f-d6d1-4a82-b2c5-cd7a1ec8310c",
    "index": 1,
    "_id": "584babb6c7be9c2398ed263f"
  },
  {
    "company": "ZINCA",
    "name": {
      "last": "Robertson",
      "first": "Barbara"
    },
    "eyeColor": "brown",
    "age": 22,
    "picture": "http://placehold.it/32x32",
    "balance": "$1,395.22",
    "isActive": false,
    "guid": "0735d8d9-a165-4ad1-893f-e821da37bf63",
    "index": 2,
    "_id": "584babb6cca4dbefa6001820"
  },
  {
    "company": "TALKOLA",
    "name": {
      "last": "Cooke",
      "first": "Lea"
    },
    "eyeColor": "blue",
    "age": 31,
    "picture": "http://placehold.it/32x32",
    "balance": "$3,074.16",
    "isActive": false,
    "guid": "7d13cbc4-6b4d-4954-b3d3-df3cfe5f2373",
    "index": 3,
    "_id": "584babb6391a2b568f1e9416"
  },
  {
    "company": "GEEKKO",
    "name": {
      "last": "Webb",
      "first": "Kline"
    },
    "eyeColor": "blue",
    "age": 34,
    "picture": "http://placehold.it/32x32",
    "balance": "$1,520.21",
    "isActive": false,
    "guid": "2b179de0-a659-4423-b3c4-11c6490e5c74",
    "index": 4,
    "_id": "584babb66d6ea73e8ed51208"
  }
];


/*
 * TASK 4
 
 // Функция принимает массив у которого есть свойста _id и Company.
 // верните объект, у которого ключ это _id, а значение Company
 
 */


function createHashTags(arr) {
	
	let mapObj = arr.map(function(elem, index, arr){
		
		let key = arr[index]._id;
		
		var obj = {} ;
		
		obj[key] = elem.company;
		
		return obj;
	
	});
	
	return mapObj;
  
}

console.log(createHashTags(listOfCompanys));


// @ SUPER
/*
 *
 * TASK 1
 * Выведите уникальные значения
 *
 * */

function uniqueElements(arr){
	
	var arrLength = arr.length;

	arr.sort();

	while (arrLength--) {
		if (arr[arrLength] == arr[arrLength - 1]) {
			arr.splice(arrLength, 1);
			
		}
	};
	
	let join = arr.join(', ');
	
	return join;

}

let notUniqArray = [1, 1, 2, 2, 2, 5, 10, 25, 30, 5, 1, 0, 22, 3, 10, 3];

console.log(uniqueElements(notUniqArray)); //1,2,5,10,25,30,0,22,3,
console.log(uniqueElements([1, 1, 2, 3, 3])); // 1,2,3
>>>>>>> fcc512f1d22c2dca066c4cdc47348fe735cd2d85
