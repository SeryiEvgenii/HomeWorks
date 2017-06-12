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


