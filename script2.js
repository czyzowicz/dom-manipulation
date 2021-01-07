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