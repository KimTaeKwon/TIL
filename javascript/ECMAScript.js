const iterable = [10, 20, 30];

let example01Text = '';
for (let i = 0; i < iterable.length; i++) {
    example01Text += iterable[i] + '</br>'
}
document.querySelector('#example01').innerHTML = example01Text;

let example02Text = '';
for (const value of iterable) {
    example02Text += value + '</br>'
}
document.querySelector('#example02').innerHTML = example02Text;

function example03(name) {
    return 'Kim' + name;
}
document.querySelector('#example03').innerHTML = example03(' TK');

const example04 = (name) => {
    return `Kim ${name}`;
}
document.querySelector('#example04').innerHTML = example04('TK');

const example05 = (name) => `Kim ${name}`;
document.querySelector('#example05').innerHTML = example05('TK');

const example06 = (n) => n*2;
document.querySelector('#example06').innerHTML = example06(2);

const example07 = {
    company1: 'webontab',
    name1: 'TK',
    age1: 40,
}
let company = example07.company1;
let name = example07.name1;
let age = example07.age1;
document.querySelector('#example07').innerHTML = company + name + age;


const example08 = {
    company2: 'webontab',
    name2: 'TK',
    age2: 40,
}
let {company2, name2, age2} = example08;
document.querySelector('#example08').innerHTML = company2 + name2 + age2;

const obj = {
    a: 10,
    b: 20,
}
const newObj = {...obj};
console.log(newObj);

const arr = [1,2,3];
const newArr = [...arr];
let example09Text = '';
for (const value of newArr) {
    example09Text += value + '</br>'
}
document.querySelector('#example09').innerHTML = example09Text;