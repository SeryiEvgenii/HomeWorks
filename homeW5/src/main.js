/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 .сoncat();
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];

function moveZeroToEnd(arr) {
	
	let arr2 = [];
	
	for(let i = 0; i < arr.length; i++) {
		
		if(arr[i] === 0) {
			arr.splice(i, 1);
			arr2.push(0);
			i--;
		};
		
	};
	
	let conc = arr.concat(arr2);
	console.log(conc);
};

moveZeroToEnd(arr1);


/*
 2. Верните сумму двух найменьших чисел в массиве
 
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 
 */

var arrStart = [10, 20, 30, 1, 31, 11, 10];
 
function minimalNumber(arr) {
	
	let sort = arr.sort();
	console.log(sort[0] + sort[1]);

};

minimalNumber(arrStart);


/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */
 
 function nameShuffler(arr){
	 
	console.log(arr.split(' ').reverse().join(' '));
 };
 
nameShuffler('john McClane');
nameShuffler('Arnold Schwarzenegger');
nameShuffler('James Bond');

 

/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */
 
 function capMe(arr) {
	
	let lowCase = arr.join(' ').toLowerCase().split(' ');
	
	arr2 =[];
	
	for(let i = 0; i < lowCase.length; i++){
		
		let firstElem = lowCase[i].slice(0, 1).toUpperCase();
		let firstIndexSlice = lowCase[i].slice(1);
		
		let concatElem = firstElem + firstIndexSlice;
		
		arr2[i] = concatElem;
	};
	
	return console.log(arr2);
	
 };

capMe(['jo', 'nelson', 'jurie']);
capMe(['KARLY', 'DANIEL', 'KELSEY']);


 
//@SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности
 
 example:
 [1,3,5,9] => 7
 [0,8,16,32] => 24
 [4, 6, 8, 10] => 2 // число сначала
 [0,16,24,32] => 8
  
 */

function random(arr) {}

random([1, 3, 5, 9]);
random([0, 8, 16, 32]);
random([0, 16, 24, 32]);
random([4, 6, 8, 10]);

/*
 2. Напишите функция которая преобразовывает/открывает скобки всех 
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов
 
 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 
 */

function openBraces(arr) {
	
	
	
	console.log(arr)
	return arr
}

openBraces([[1,2],[3,[4]],5, 10]);
openBraces([25,10,[10,[15]]]);
