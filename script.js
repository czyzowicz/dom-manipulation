const body = document.body;
// body.append("Whatever");

const div = document.createElement('div');
// div.innerText ="Hello World";
//div.textContent = "Hello World 2";
div.innerHTML = "<strong>Hello World 2</strong>";
const strong = document.createElement('strong');
strong.innerText ="Hello World 2";
div.append(strong);

body.append(div);

// const div = document.querySelector('div');
// console.log(div.textContent);
// console.log(div.innerText);