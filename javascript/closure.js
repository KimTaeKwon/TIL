function getClosure() {
    var text = 'variable 1';
    return function () {
        return text;
    };
}
var closure = getClosure();
// console.log(closure());
document.querySelector('#example01').innerHTML = closure();


var base = 'hello, ';
function helloExample01(name) {
    var text = base + name;
    return function () {
        var container = document.getElementById("example02");
        var content = document.createElement("p");
        content.innerHTML = text;
        container.appendChild(content);
        // console.log(text);
    }
}
var hello1 = helloExample01('helloExample01-1');
var hello2 = helloExample01('helloExample01-2');
var hello3 = helloExample01('helloExample01-3');
hello1();
hello2();
hello3();







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


var i;
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}

var index;
for (var index = 0; index < 10; index++) {
    (function (j) {
        setTimeout(function() {
            console.log(j);
        }, 100);
    })(index);
}

function helloExample07(name) {
    var _name = name;
    return function() {
        console.log('hello, ' + _name);
    }
}
var hello1 = helloExample07('test1');
var hello2 = helloExample07('test2');
var hello3 = helloExample07('test3');
hello1();
hello2();
hello3();
hello1 = null;
hello2 = null;
hello3 = null;