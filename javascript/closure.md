# [Closure](https://kimtaekwon.github.io/TIL/javascript/closure.html)

## 1. Closure

- 클로저는 독립적인 (자유) 변수를 가리키는 함수이다. 또는, 클로저 안에 정의된 함수는 만들어진 환경을 ‘기억한다’.
- 흔히 함수 내에서 함수를 정의하고 사용하면 클로저라고 한다. 하지만 대개는 정의한 함수를 리턴하고 사용은 바깥에서 하게된다.

### 1.1. Example

``` javascript
function getClosure() {
    var text = 'variable 1'; // 2.
    return function () { // 1.
        return text;
    };
}
var closure = getClosure(); // 3.
```

### 1.1. Notes
1. getClosure()는 함수를 반환하고, 
2. 반환된 함수는 getClosure() 내부에서 선언된 변수를 참조하고 있다. 
3. 이렇게 참조된 변수는 함수 실행이 끝났다고 해서 사라지지 않았고, 여전히 제대로 된 값을 반환하고 있는 걸 알 수 있다. 여기서 반환된 함수가 클로저. MDN에서 정의된 내용에서도 말했듯 환경을 기억하고 있는 것처럼 보인다.



### 1.2. Example

``` javascript
var base = 'hello, ';
function helloExample02(name) {
    var text = base + name; // 1.
    return function () {
        var container = document.getElementById("example02");
        var content = document.createElement("p");
        content.innerHTML = text;
        container.appendChild(content);
    }
}
var hello1 = helloExample02('helloExample02-1');
var hello2 = helloExample02('helloExample02-2');
var hello3 = helloExample02('helloExample02-3');
hello1(); // 2.
hello2();
hello3();
```

### 1.2. Notes
1. 출력된 결과를 보면 text 변수가 동적으로 변화하고 있는 것처럼 보인다. 실제로는 text라는 변수 자체가 여러 번 생성된 것이다. 
2. 즉, hello1()과 hello2(), hello3()은 서로 다른 환경을 가지고 있다.


## 2. 클로저를 통한 은닉화
- `Prototype`을 통한 객체를 만들 때의 주요한 문제 중 하나는 Private variables에 대한 접근 권한 문제이다.
### 2.1. Example

``` javascript
function helloExample03(name) {
    this._name = name; // 1.
}
helloExample03.prototype.say = function() {
    var container = document.getElementById("example03");
    var content = document.createElement("p");
    content.innerHTML = 'hello, ' + this._name;
    container.appendChild(content);
}
var hello1 = new helloExample03('prototype1');
var hello2 = new helloExample03('prototype2');
var hello3 = new helloExample03('prototype3');
hello1.say();
hello2.say();
hello3.say();
hello1._name = 'anonymous'; // 2.
hello1.say();
```

### 2.1. Notes
1. `helloExample03()`로 생성된 객체들은 모두 `_name`이라는 변수를 가지게 된다. 변수명 앞에 `underscore(_)`를 포함했기 때문에 일반적인 JavaScript 네이밍 컨벤션을 생각해 봤을때 이 변수는 Private variable으로 쓰고싶다는 의도를 알 수 있다. 
2. 하지만 실제로는 여전히 외부에서도 쉽게 접근가능한 변수일 뿐이다.

이 경우에 클로저를 사용하여 외부에서 변수에 직접 접근하는 것을 제한할 수 있다.


### 2.2. Example

``` javascript
function helloExample04(name) {
    var _name = name;
    return function() {
        var container = document.getElementById("example04");
        var content = document.createElement("p");
        content.innerHTML = 'hello, ' + _name;
        container.appendChild(content);
    }
}
var hello1 = helloExample04('helloExample04-1');
var hello2 = helloExample04('helloExample04-2');
var hello3 = helloExample04('helloExample04-3');
hello1();
hello2();
hello3();
```

### 2.2. Notes
1. 특별히 인터페이스를 제공하는 것이 아니라면, 여기서는 외부에서 _name에 접근할 방법이 전혀 없다. 이렇게 은닉화도 생각보다 쉽게 해결할 수 있다.


## 3. 반복문 클로저

### 3.1. Example
``` javascript
var i;
for (var i = 0; i < 10; i++) { // 1.
    setTimeout(function () { // 2.
        var container = document.getElementById("example05");
        var content = document.createElement("p");
        content.innerHTML = i;
        container.appendChild(content);
    }, 100);
}
```

### 3.1. Notes
1. 간단하게 0-9까지의 정수를 출력하는 코드이지만 실제로 돌려보면 엉뚱하게도 10만 열 번 출력되는 걸 볼 수 있다. 왜일까?
2. 먼저 setTimeout()에 인자로 넘긴 익명함수는 모두 0.1초 뒤에 호출될 것이다. 그 0.1초 동안에 이미 반복문이 모두 순회되면서 i값은 이미 10이 된 상태. 그 때 익명함수가 호출되면서 이미 10이 되어버린 i를 참조하는 것이다.

이 경우에도 클로저를 사용하면 원하는 대로 동작하도록 만들 수 있다.


### 3.2. Example
``` javascript
var index;
for (var index = 0; index < 10; index++) { // 3.
    (function (j) { // 1.
        setTimeout(function() {
            var container = document.getElementById("example06");
            var content = document.createElement("p");
            content.innerHTML = j;
            container.appendChild(content);
        }, 100);
    })(index);
}
```

### 3.2. Notes
1. 중간에 IIFE를 덧붙여 setTimeout()에 걸린 익명함수를 클로저로 만들었다. 앞서 말한대로 클로저는 만들어진 환경을 기억한다. 이 코드에서 i는 IIFE내에 j라는 형태로 주입되고, 클로저에 의해 각기 다른 환경속에 포함된다. 
2. 반복문은 10회 반복되므로 10개의 환경이 생길 것이고, 10개의 서로 다른 환경에 10개의 서로 다른 j가 생긴다.


## 4. 클로저의 성능

-클로저는 각자의 환경을 가진다. 이 환경을 기억하기 위해서는 당연히 메모리가 소모될 것이다. 클로저를 생성해놓고 참조를 제거하지 않는 것은 C++에서 동적할당으로 객체를 생성해놓고 delete를 사용하지 않는 것과 비슷하다. 클로저를 통해 내부 변수를 참조하는 동안에는 내부 변수가 차지하는 메모리를 GC가 회수하지 않는다. 따라서 클로저 사용이 끝나면 참조를 제거하는 것이 좋다.


### 4.1. Example
``` javascript
function helloExample07(name) {
    var _name = name;
    return function() {
        var container = document.getElementById("example07");
        var content = document.createElement("p");
        content.innerHTML = 'hello, ' + _name;
        container.appendChild(content);
    }
}
var hello1 = helloExample07('test1');
var hello2 = helloExample07('test2');
var hello3 = helloExample07('test3');
hello1();
hello2();
hello3();
hello1 = null; // 1.
hello2 = null;
hello3 = null;
```

### 4.1. Notes
1. 여기서 메모리를 release 시키기 클로저의 참조를 제거해야 한다.
2. 이처럼 메모리 관리에 있어서 약점이 있지만 추가로 스코프 체인을 검색하는 시간과 새로운 스코프를 생성하는데 드는 비용도 감안하지 않을 수 없다.





[참고 : 클로져 - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures")
[참고 : 클로저 사용에는 주의가 필요합니다 ](http://blog.javarouka.me/2012/01/closure.html")
[참고 : 자바스크립트의 클로저 ](http://blog.javarouka.me/2012/01/javascripts-closure.html")
[참고 : 자바스크립트의 스코프와 클로저](http://meetup.toast.com/posts/86")
[참고 : 클로저, 그리고 캡슐화와 은닉화](http://meetup.toast.com/posts/90")
[참고 : Closure 쉽게 이해하기](http://unikys.tistory.com/309")
[참고 : How do JavaScript closures work?](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work")