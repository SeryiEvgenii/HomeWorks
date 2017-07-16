
'use strict'

const app = {
	appName: 'Тест по программированию',
	questions: [
		{
			name: 'Типы данных в JavaScript:',
			answers: ['Массив', 'Строка', 'Объект'],
			rightAnswer: ['Строка']
		},
		{
			name: 'Что вернет выражение \"typeof null\":',
			answers: ['Undefined', 'Null', 'Object', 'NaN', 'Infinity'],
			rightAnswer: ['Object']
		},
		{
			name: '.__proto__ используется для наследования в:',
			answers: ['объектах', 'функциях-конструкторах'],
			rightAnswer: ['объектах']
		},
    {
			name: 'Какой из методов не вызывает функцию:',
			answers: ['apply', 'bind', 'call'],
			rightAnswer: ['bind']
		},
    {
			name: 'Сколько прототипов может быть у объекта:',
			answers: ['1', '2', 'неограниченно', 'зависит от свойств объекта'],
			rightAnswer: ['1']
		},
	],
  
	createLi() {
		return this.new('li');
	},
  
	createAnswer(answer) {
		const liAnswer = this.createLi();
	  const label = this.new('label');
	  label.textContent = answer;
	  const input = this.new('input');
	  input.setAttribute('type', 'checkbox');
	  liAnswer.appendChild(input);
	  liAnswer.appendChild(label);
	  return liAnswer;
	},
  
	render() {
    const body = document.body;
    const main = this.new('main');
	  const h1 = this.new('h1');
	  h1.textContent = this.appName;
	  const ol = this.new('ol');
	  const button = this.new('button');
	  button.textContent = 'Проверить';
	    
	  button.onclick = () => {
	    const ul = document.querySelectorAll('ul');
      let checkedArray = [];
      let rightAnswerArray = [];
      [...ul].forEach(ulItem => {
        const userCheck = ulItem.querySelectorAll(":checked + label");
        [...userCheck].map(label => {
          checkedArray.push(label.innerHTML);
        });
      });
      this.questions.map(question => {
        rightAnswerArray.push(question.rightAnswer[0]);
      });
      
      if(checkedArray.length !== rightAnswerArray.length){
        alert('Ответьте на все вопросы!');
        checkedArray = [];
        rightAnswerArray = [];
      }else{
        checkedArray.forEach((checked, index, arr) => {
          rightAnswerArray.forEach((right, i) => {
            if(right == arr[i]){
              ul[i].classList.remove('error');
              ul[i].classList.add('right');
            }else{
              ul[i].classList.remove('right');
              ul[i].classList.add('error');
            }
          });
        });
      };
	  };

	  this.questions.forEach(question => {
	    const li = this.createLi();
	    const h3 = this.new('h3');
	    h3.textContent = question.name;
	    const ul = this.new('ul');
        
	    question.answers.forEach(answer => {
	      const htmlAnswer = this.createAnswer(answer);
	      ul.appendChild(htmlAnswer);
	    });
        
	    li.appendChild(h3);
	    li.appendChild(ul);
	    ol.appendChild(li);
      
      main.appendChild(h1);
      main.appendChild(ol);
      main.appendChild(button);
	      
	  });
      
    body.appendChild(main);

	},
  
  new(tag) {
		return document.createElement(tag)
	}
};

app.render();