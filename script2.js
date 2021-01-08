const body = document.body;
const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye'); 

// spanBye.remove();
// div.removeChild(spanHi)

console.log(spanHi.getAttribute('id'));
console.log(spanHi.title);

console.log(spanHi.setAttribute('id', 'number'));
spanHi.id = 'id + number';
spanHi.removeAttribute('title');

console.log(spanHi.dataset.test); 

spanHi.classList.add('new-class');
spanHi.classList.remove('hi2');
spanHi.classList.toggle('h1');
spanHi.classList.toggle('h2');

spanHi.style.color='red';
spanHi.style.backgroundColor='black';

spanBye.style.fontWeight = 'bold';