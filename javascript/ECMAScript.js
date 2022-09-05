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


function Fruit(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
}
Fruit.prototype.taste = function() {
    console.log(this.color + ' taste');
}
Fruit.prototype.quality = function() {
    if (this.name == 'banana') {
        console.log('very good');
    } else {
        console.log('good');
    }
}
function Banana(name, color, price) {
    Fruit.call(this, name, color, price);
}
function Tomato(name, color, price) {
    Fruit.call(this, name, color, price);
}
Banana.prototype = Fruit.prototype;
Tomato.prototype = Fruit.prototype;
const banana = new Banana("banana", "yellow", 7000 + " won");
const tomato = new Tomato("tomato", "red", 5000 + " won");
banana.taste();
tomato.taste();
banana.quality();
tomato.quality();


class FruitExample11 {
    constructor(name, color, price){
        this.name = name;
        this.color = color;
        this.price = price;
    }
    taste() {
        console.log(this.color + ' taste');
        document.querySelector('#example11').innerHTML = this.color + ' taste';
    }
    quality() {
        if (this.name == 'banana') {
            console.log('very good');
        } else {
            console.log('good');
        }
    }
}
// console.log(FruitExample11.prototype.taste);
// console.log(FruitExample11.prototype.quality);
const banana02 = new Banana("banana", "yellow", 7000 + " won");
const tomato02 = new Tomato("tomato", "red", 5000 + " won");
banana02.taste();
tomato02.taste();

class Banana02 extends FruitExample11 {
    constructor(name, color, price){
        super(name, color, price)
    }
}
class Tomato02 extends FruitExample11 {
    constructor(name, color, price){
        super(name, color, price)
    }
}
const banana03 = new Banana02("banana", "yellow", 7000 + " won");
const tomato03 = new Tomato02("tomato", "red", 5000 + " won");
banana03.taste();
tomato03.taste();

class example12Parent {
    constructor() {
        this.name = 'kim'
    }
}
let example12child = new example12Parent();
console.log(example12child);



const pets = [
    {type: 'Dog', name: 'Max'},
    {type: 'Cat', name: 'Karl'},
    {type: 'Dog', name: 'Tommy'},
]
function findDog(name) {
    for (let index = 0; index < pets.length; index++) {
        if (pets[index].type === 'Dog' && pets[index].name === name) {
            console.log(pets[index]);
            return pets[index];
        }
    }
}
findDog('Tommy');

pet = pets.find(pet => pet.type === 'Dog' && pet.name === 'Tommy');
console.log(pet);


function validate(values) {
    if (!values.first)
        return false;
    if (!values.last)
        return false;
    return true;
}
console.log(validate({first:'Bruce', last:'Wayne'}));

const schema = {
    first: {
        required:true
    },
    last: {
        required:true
    }
}
const validate_example18 = (schema, values) => {
    for (const field in schema) {
        if (schema[field].required) {
            if (!values[field]) {
                return false;
            }
        }
    }
    return true;
}
console.log(validate_example18(schema, {first:'Bruce'}));
console.log(validate_example18(schema, {first:'Bruce', last:'Wayne'}));



console.log(Math.floor(4.9) === 4);
console.log(~~4.9 === 4);







// https://blog.naver.com/nicholasdw/222307745539
// https://blog.naver.com/dlgkstoa415/222728022531

// https://chanspark.github.io/2017/11/28/ES6-%EA%BF%80%ED%8C%81.html
