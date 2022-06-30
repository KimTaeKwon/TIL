# [Optional Chaning](https://kimtaekwon.github.io/TIL/javascript/optional-chaning.html)

## 옵셔널 체이닝(Optional Chaning) 연산자

- 연산자 기준 탐색 대상(오른쪽값)이 아래와 같은 경우 이후의 값을 탐색하지 않고 undefined를 반환합니다.
- 연산자 기준 왼쪽 값이 null 또는 undefined인 경우
- 연산자 기준 오른쪽 키(혹은 메소드)가 탐색 대상(왼쪽 값)에 존재하지 않는 경우

사용 예시는 아래와 같습니다.
### 1.1. Example

``` javascript
const adressLine1 = user.adress?.adressLine1; // 1.
```
### 1.1. Notes
1. adress가 없으면 adressLine1을 탐색하지 않고 undefined를 반환합니다.


### 1.2. Example

``` javascript
const users01 = [{
    name: '하니',
    adress: {
      zipcode: '000',
      adressLine1: '경기도 성남시 분당구 판교역로 233-1',
      adressLine2: '1층'
    }
}, {
    name: '죠르디'
}]

users01.map(users01 => {
    console.log(users01.adress?.adressLine1); // 1.
});
```
### 1.2. Notes
1. '하니'의 정보는 adress가 있기 때문에 정상적으로 console.log를 출력했지만 '죠르디'는 adress가 없기 때문에 undefined가 되었고 undefined에서 adressLine1을 찾으려는 상황이 되어 오류가 난 것입니다.

``` javascript
users.map(user => {
  const adress = user.adress;
  const adressLine1 = (adress === null || adress === undefined) 
  ? undefined : adress.adressLine1;

  console.log(adressLine1);
})
```
> 그래서 구조가 불명확한 데이터를 사용하는 경우 이전에는 아래 코드와 같이 null, undefind 인지 검사하는 작업이 꼭 필요했습니다.

``` javascript
users.map(user => {
  console.log(user.adress?.adressLine1);
})
```
> 이런 상황에서 옵셔널 체이닝을 사용하면 짧고 간결하게 코드를 작성하면서 에러도 방지할 수 있습니다.

### 1.3. Example

``` javascript
let aa;
console.log(aa?.bb); // 1.
console.log(cc?.bb); // 2.
```
> 선언된 aa 변수는 옵셔널 체이닝을 사용할 수 있었지만, cc와 같이 정의하지 않은 상태일 때 옵셔널 체이닝을 사용하면 ReferenceError가 납니다.

>  옵셔널 체이닝은 정의되지 않은 루트 객체에는 사용할 수 없습니다.

### 1.3. Notes
1. 출력: undefined
2. 에러 발생: Uncaught ReferenceError: cc is not defined



### 1.4. Example

``` javascript
const users02 = [{
    name: '하니',
    adress: {
      zipcode: '000',
      adressLine1: '경기도 성남시 분당구 판교역로 233-1',
      adressLine2: '1층',
      getAdressText () {
        return `${this.adressLine1} ${this.adressLine2}`
      }
    }
  }, {
    name: '죠르디'
}]
  
users02.map(users02 => {
    console.log(users02.adress?.getAdressText?.());
  
    // 출력 결과:
    // 경기도 성남시 분당구 판교역로 233-1 1층
    // undefined
});

let adress = users02[0].adress?.['adress' + 'Line1']; // 2.
```

### 1.4. Notes
1. 옵셔널 체이닝은 존재하지 않을 수 있는 함수(메서드)를 호출하는데도 사용할 수 있습니다. 옵셔널 체이닝으로 getAdressText 메서드가 존재하는지 확인한 후 실행합니다.
2. 속성을 표현식으로 접근할 때 대괄호 표기법을 사용할 수 있습니다.


### 1.5. Example

``` javascript
const user03 = {};
user03?.name = 'hani'; // 1.
```
> 옵셔널 체이닝 연산자는 할당자 왼쪽에서 사용할 수 없습니다​.

### 1.5. Notes
1. 에러: Uncaught SyntaxError: Invalid left-hand side in assignment