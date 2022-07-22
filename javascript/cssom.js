let el_01 = document.getElementById('example01');
el_01.style.padding = '100px';
el_01.style.backgroundColor = 'tomato';
let backgroundColor = el_01.style.backgroundColor;
el_01.innerHTML = backgroundColor;
console.log(el_01.style.color);

let el_02 = document.getElementById('example02');
let computed_style01 = window.getComputedStyle(el_02).background;
let computed_style02 = window.getComputedStyle(el_02).width;
el_02.innerHTML = computed_style01 + computed_style02;

let box = document.querySelector('.box');
let pseudo_element = window.getComputedStyle(box, '::before').width;
// document.getElementById('example03').textContent = pseudo_element + box.textContent;
// document.getElementById('example03').textContent = box.textContent.concat(pseudo_element);
let newElement = document.createElement("p");
newElement.textContent = pseudo_element;
document.getElementById('example03').appendChild(newElement);

let el_04 = document.getElementById('example04');
el_04.style.setProperty('color', 'lime');
el_04.style.setProperty('font-size', '16px');
let getProperty_value = el_04.style.getPropertyValue('font-size');
let item0 = el_04.style.item(0);
let item1 = el_04.style.item(1);
let newElement_04 = document.createElement("p");
newElement_04.textContent = getProperty_value + item0 + item1;
el_04.appendChild(newElement_04);
el_04.style.removeProperty('color');

let el_05 = document.getElementById('example05');
el_05.style.setProperty('font-family', 'Georgia, serif', 'important');
el_05.style.setProperty('font-size', '1.5em');

let font_family = el_05.style.getPropertyPriority('font-family');
let font_size = el_05.style.getPropertyPriority('font-size');
let newElement_05 = document.createElement("p");
newElement_05.textContent = font_family + font_size;
el_05.appendChild(newElement_05);
console.log(el_05.style.getPropertyPriority('border'));
console.log(el_05.style.getPropertyPriority('border-top-width'));
console.log(el_05.style.getPropertyPriority('border-bottom-width'));
console.log(el_05.style.getPropertyPriority('border-color'));
console.log(el_05.style.getPropertyPriority('border-style'));