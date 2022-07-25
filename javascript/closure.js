function getClosure() {
    var text = 'variable 1';
    return function () {
        return text;
    };
}
var closure = getClosure();
console.log(closure());


var base = 'hello, ';
function sayHelloTo(name) {
    var text = base + name;
    return function () {
        console.log(text);
    }
}
var hello1 = sayHelloTo('test1');
var hello2 = sayHelloTo('test2');
var hello3 = sayHelloTo('test3');
var hello4 = sayHelloTo('test4');
hello1();
hello2();
hello3();
hello4();


function hello(name) {
    this._name = name;
}
hello.prototype.say = function() {
    console.log('hello, ' + this._name);
}
var hello1 = new hello('prototype1');
var hello2 = new hello('prototype2');
var hello3 = new hello('prototype3');
hello1.say();
hello2.say();
hello3.say();
hello1._name = 'anonymous';
hello1.say();


function helloExample04(name) {
    var _name = name;
    return function() {
        console.log('hello, ' + _name);
    }
}
var hello1 = helloExample04('test1');
var hello2 = helloExample04('test2');
var hello3 = helloExample04('test3');
hello1();
hello2();
hello3();


var index;
for (let index = 0; index < 10; index++) {
    setTimeout(() => {
        console.log(index);
    }, 100);
}