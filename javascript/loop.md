# [Loop](https://kimtaekwon.github.io/TIL/javascript/loop.html)

## 1. for
``` javascript
for ([initialization]; [condition]; [final-expression]){ 
    statement
}
```
* initialization : 변수 초기화, var 또는 let 키워드를 사용하여 새로운 변수 선언 가능 
* condition : 매 반복마다 평가할 식. 평가의 결과가 true 인 경우 statement실행. 식을 넣지 않는 경우 평가 결과는 언제나 true. 결과가 false라면 for문 바로 다음식으로 넘어간다. 
* final-expression : 매 반복 후 평가할 식. 다음 condition 평가 이전에 발생. 주로 카운터 변수를 증감하거나 바꿀때 사용한다. 
* statement - 조건의 결과가 true일때 실행


### 1.1. Example

``` javascript
for(let i = 0; i < 9; i++) {
    example01Text += i + '</br>'
}
```

### 1.1. Notes
1.  i는 0이고 i가 9보다 작을때까지 i를 1씩 증가



### 1.2. Example

``` javascript
for(var i = 0;; i++) { // 1.
    if (i > 3) break; // 2.
    example02Text += i + '</br>'
}
```

### 1.2. Notes
1. initialization, condition, final-expression 모두 선택적이고 반드시 필요한 값은 아니다. 다만,
2. condition에 식을 넣지 않는 경우 무한 루프를 돌기때문에 무한 루프를 돌지 않게 식을 추가해줘야한다.



### 1.3. Example

``` javascript
let i = 0;
for(;;) {
    if (i > 5) break; // 1.
    i++;
    example03Text += i + '</br>'
}
```

### 1.3. Notes
1. 세가지 모두 생략하는 경우에도 마찬가지로 루프를 탈출할 수 있는 식을 추가해줘야 한다.


## 2. forEach

``` javascript
arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
```
* callback : 각 요소에 대해 실행할 함수. 다음 세 가지 매개변수를 받는다.
    1) currentValue: 처리할 현재 요소
    2) index: 처리할 현재 요소의 인덱스
    3) array: forEach()를 호출한 배열
* index, array는 필수가 아닌 선택요소로 없어도 무관하다.
* forEach()는 주어진 callback을 배열에 있는 각 요소에 오름차순으로 한번씩 실행한다. 처리할 요소의 범위는 최초 callback호출 전에 설정되기 때문에 forEach()호출을 시작한 뒤 배열에 추가한 요소는 루프를 돌지 않는다. 또한 forEach()는 undefined를 반환하고 기존의 배열을 변형시키지 않는다. 
* return 값이 없기때문에 변수를 만들어 변수에 할당을 해도 undefined가 할당되기때문에 보통은 바로 호출해서 사용한다. 


### 2.1. Example

``` javascript
const items = ['item1', 'item2', 'item3'];
const copy = [];
items.forEach(function (item) {
    copy.push(item);
});
```

### 2.1. Notes
* forEach()는 for문의 대용으로 사용할 수 있고 향상된 for문이지만 중간에 멈출 수 없기 때문에 중간에 멈춰야 하는 경우 다른 방법을 사용해야한다.


## 3. map

``` javascript
arr.map(callback(currentValue[, index[, array]])[, thisArg])
```

* callback : 각 요소에 대해 실행할 함수. 다음 세 가지 매개변수를 받는다.
1) currentValue: 처리할 현재 요소
2) index: 처리할 현재 요소의 인덱스
3) array: forEach()를 호출한 배열
* index, array는 필수가 아닌 선택요소로 없어도 무관하다.
* map은 callback함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만들어 return한다. map도 forEach와 동일하게 기존의 배열을 변형하지 않는다. 
* forEach와 map은 비슷한듯 하지만 return 값이 다르다. 
* forEach는 undefined를 return하고 map는 기존의 배열의 값에 callback을 적용하여 새로운 배열을 만들어 return 하기 때문에 변수에다 저장하여 콘솔에서 찍으면 그 새로운 배열이 찍힌다.

### 3.1. Example

``` javascript
let numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt);
```

### 3.1. Notes
* 어떤 메소드를 사용할 때는 무엇을 return하는지를 꼭 확인하고 사용해야 원하는 값을 얻을 수 있다


[참고 : for](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for)
[참고 : forEach](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
[참고 : map](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)