// 1.

let numbers = [25, 1];
let project = 'проект';
let team = `команда`;
let howMuch = 'Сколько';
let sentence = 'нужно программистов чтобы сделать проект ?';

let task1 = howMuch + ' ' + sentence + ' ' + numbers[1] + ', ' + numbers[0] + ', ' + team;

console.log(task1)

// 2.

let array = [
  'Он',
  'был больше ни телом, к которому рано или поздно',
  'он обнаружил',
  'не',
  'Так, когда Будда достиг Просветления',
  '...',
  'что больше',
  'ощущает себя мишенью',
  'не'
];

//let homeSentence = array[4] + ' ' + array[2] + ' ' + array[6] + ' ' + array[3] + ' ' + array[7] + '. ' + array[0] + ' ' + array[8] + ' ' + array[1] + ' ' + array[5];

// С использованием ES6 строки:

let homeSentence = `${array[4]} ${array[2]} ${array[6]} ${array[3]} ${array[7]}.
${array[0]} ${array[8]} ${array[1]} ${array[5]}`;

console.log(homeSentence);

// 3.

let myObj = {};

myObj.home = 12;
myObj.entrance = 'two';
myObj["floor"] = 4;
myObj["apartment"] = 34;

console.log(myObj);

// 4.

let sliceString = 'Ytube';

console.log('You' + sliceString.slice(1));

// 5.

let frameworks = [4.7, 'Angular', '4Angular', 'React/Redux'];

let x = 'google \released ' + 'new version\ '
        +
        frameworks[1]
		+ 
		Math.floor(frameworks[0])
		+  
        '\ But real speed is '
		+ 
		`${frameworks[frameworks.length - 1]}`;
