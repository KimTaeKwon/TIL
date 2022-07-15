# [importNode](https://kimtaekwon.github.io/TIL/javascript/cssom.html)

## CSS 제어하기 - CSSOM : CSS Object Model

- CSS Object Model은 Javascript로 CSS를 제어할 수 있는 API 모음이다. DOM과 흡사하지만, HTML이 아닌 CSS를 위한 것이다. 사용자가 CSS를 동적으로 읽거나 수정할 수 있게 해준다.

### 1.1. Example

``` javascript
el_01.style.padding = '100px'; // 1.
el_01.style.backgroundColor = 'tomato'; // 2.
el_01.style.backgroundColor; // 3.
console.log(el_01.style.color); // 4.
```

### 1.1. Notes
1. element.style.propertyName 으로 적용할 수 있다.
2. 만약 background-color 를 적용하고 싶다면? - 로 연결된 속성은 camel case로 변환해서 사용할 수 있다.
3. 인라인 스타일에만 적용된다
4. 따라서 그 요소의 다른 속성을 읽으려고 하면 아무것도 반환하지 않는다.

### 1.2. Example

``` javascript
window.getComputedStyle(el_02).background; // 1. 2.
window.getComputedStyle(el_02).width; // 3.
window.getComputedStyle(el).backgroundColor; // 4.
window.getComputedStyle(el)['background-color']; // 5.
window.getComputedStyle(el).getPropertyValue('background-color'); // 6.
```

### 1.2. Notes
1. 메소드를 이용해서 계산된 CSS 속성의 값을 가져올 수 있다.
2. getComputedStyle() 은 background 가 가지는 모든 속성의 값을 알려준다. CSS에서 선언되지 않은 값들은 초기값(혹은 기본값)을 반환한다.
3. width 나 height 속성은 선언된 값이 아닌 실제 계산된 수치를 반환한다. 이는 window.innerWidth 와 비슷한 동작 방식이다.
4. 점(.) 이용, camel case를 사용한다.
5. [대괄호] 이용, - 사용 : lint 에서 권고하지 않음.
6. getPropertyValue() 메소드를 이용, - 사용


### 1.3. Example

``` javascript
window.getComputedStyle(box, '::before').width; //1.
let input = document.querySelector('input'); // 2.
window.getComputedStyle(input, '::placeholder').color;
let p = document.querySelector('.box p');
window.getComputedStyle(p, '::first-line').color;
```

### 1.3. Notes
1. window.getComputedStyle() 메소드에 두번째 인자를 전달하면 가상 요소의 속성에 접근할 수 있다.
2. placeholder 나 first-line 에도 활용할 수 있다.


### 1.4. Example

``` javascript
el_04.style.setProperty('color', 'lime'); // 1.
el_04.style.setProperty('font-size', '16px'); // 2.
let getProperty_value = el_04.style.getPropertyValue('font-size'); // 3.
let item0 = el_04.style.item(0); // 4.
let item1 = el_04.style.item(1);
el_04.style.removeProperty('color'); // 5.
el_04.style.item(1) // 6.
```

### 1.4. Notes
1. setProperty() : 설정, 2개의 인자 (속성,값) - 설정(set)
2. -를 사용한것에 주목! (setProperty()와 getPropertyValue()에서 fontSize 대신 문자열 'font-size'를 사용한것에 주의하자.
3. getProperty() : 가져오기, 1개의 인자 - 읽기(get)
4. item() : 가져오려는 속성의 인덱스를 인자로 사용 - item() 이용, 인자값은 인덱스 숫자
5. removeProperty() : 삭제 - 제거(remove)
6. 제거 후에는 빈 문자열을 반환한다.


### 1.5. Example

``` javascript
el_05.style.setProperty('font-family', 'Georgia, serif', 'important'); // 1.
el_05.style.setProperty('font-size', '1.5em');
el_05.style.getPropertyPriority('font-family'); // 2.
el_05.style.getPropertyPriority('font-size');

el_05.style.getPropertyPriority('border'); // 3.
el_05.style.getPropertyPriority('border-top-width');
el_05.style.getPropertyPriority('border-bottom-width');
el_05.style.getPropertyPriority('border-color');
el_05.style.getPropertyPriority('border-style');
```

### 1.5. Notes
1. 기존 예제들과 동일하게 setProperty()를 메소드를 사용했지만, 세번째 인자로 'important' 를 전달한 것에 주목하자. 이는 속성에 '!important' 를 부여하게 된다. 세번째 인자는 생략 가능하며, undefined나 빈 문자열도 전달할 수 있다. 값으로 !important를 부여한 후, 
2. 해당 속성의 우선순위를 확인하기 위해 getPropertyPriority() 메소드를 사용했다.
3. 축약형을 사용해도 모두 동일한 값을 반환.




[참고](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model)