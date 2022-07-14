// document.body.style.background = 'tomato';
// document.body.style.padding = '100px';


document.getElementById('example01').style.background = 'tomato';
document.getElementById('example01').style.padding = '100px';

let el_02 = document.getElementById('example02');
el_02.style.backgroundColor = '#ccc';
console.log(el_02.style.color);
console.log(window.getComputedStyle(document.body).background);
var computed_style = window.getComputedStyle(el_02).width;
el_02.innerHTML = computed_style;

let box = document.querySelector('.box');
let pseudo_element = window.getComputedStyle(box, '::before').width;
document.getElementById('example03').textContent = pseudo_element;
