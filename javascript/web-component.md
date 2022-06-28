# [Web Component](https://kimtaekwon.github.io/TIL/javascript/web-component.html)

* Web Component는 웹 페이지를 구성하는 요소(HTML Tag, Style 등)들을 하나의 요소(Component)로 캡슐화하는 것을 말한다. React의 Component와 같은 역할을 한다고 보면 된다.
* Web Component는 3가지 기술로 캡슐화한다.

## 1. Custom Elements
* 개발자가 별도의 이름을 가진 새로운 HTML 태그 를 생성하거나 기존에 있는 HTML 태그를 확장할 있도록 해주는 기능.
* Custom Elements 는 ShadowDom 과 함께 사용하여 구성된 Web Component 의 모듈식 코드 사용과 재사용성을 늘릴 수 있도록 해줍니다.
* Custom Elements 는 CustomElementRegistry 객체를 사용하여 등록하게 되고, 내부에는 lifecycle 이 존재.
* 사용자 정의 요소를 등록/조회할 수 있다. 아래와 같이 반복되는 구성의 요소들이 있다고 해보자.

### 1.1. Example
``` html
<div>
    <h1>제목</h1>
    <p>내용</p>
</div>
<div>
    <h1>제목</h1>
    <p>내용</p>
</div>
```

``` html
<popup-info></popup-info>
<popup-info></popup-info>
```

``` javascript
class PopupInfo extends HTMLElement { // (1)
    constructor() {
        super(); // (2)

        const title = document.createElement('h1');
        const content = document.createElement('p');

        title.innerHTML = '제목';
        content.innerHTML = '내용';

        this.append(title); // (3)
        this.append(content);
    }
}

customElements.define('popup-info', PopupInfo); // (4)
```

### 1.1. Notes
1. 사용자 정의 요소에서 사용할 클래스를 생성해 준다. `HTMLElement` 인터페이스를 상속받고 있는데, HTML 요소라고 생각하면 된다.
2. 사용자 정의 요소를 정의할 때 실행할 코드를 적는 곳이다 `super()`는 `constructor` 내에서 항상 맨 첫 번째로 호출해야 한다.
3. 여기서 this는 사용자 정의 요소다. 즉, `PopupInfo`에 `title`과 content를 삽입한다는 뜻이다.
4. define 메서드는 새로운 사용자 정의 요소를 생성한다. `customElements`는 `CustomElementRegistry` 인터페이스다. `CustomElementRegistry`는 사용자 정의 요소의 컨트롤러로 이 개체를 사용해야 사용자 정의 요소를 등록하고 조회할 수 있다. 첫 번째 매개변수는 사용자 정의 요소의 이름을 정의하고, 두 번째 매개변수는 생성할 사용자 정의 요소다. 즉, `popup-info`라는 요소명으로 `PopupInfo`라는 사용자 정의 요소를 생성하겠다는 뜻이다.

### 1.2. Example

``` html
<div class="card">
    <custom-ele title="WC"></custom-ele>
    <div>
        <button id="delete-wc">제거</button>
    </div>
</div>
```

``` javascript
class CustomEle extends HTMLElement {
    constructor() {
      super(); // 1.
    }
    connectedCallback() { // 2.
      this.render();
    }
    adoptCallback() { } // 3.
    
    
    attributeChangedCallback(attrName, oldVal, newVal) { // 4.
      this.render();
    }
    static get observedAttributes() { // 5.
      return ['title'];
    }
    get title() {
      return this.getAttribute('title');
    }
    disconnectedCallback() { //6.
      alert('bye bye');
    }
    render() {
      this.innerHTML = `
      <h1>${this.title}</h1>
     `
    }
}
customElements.define('custom-ele', CustomEle);
```

### 1.2. Notes
1. 생성자 에서는 보통 해당 엘리먼트에 포함된 함수를 초기화 한다.
2. 커스텀 엘리먼트가 생성될때 실행된다.
3. 해당요소가 새로운 페이지나 문서로 이동 될 때마다 호출 된다.
4. 요소의 속성이 추가, 제거, 업데이트, 교체되는 부분을 관찰하고 호출된다. (커스텀 엘리먼트 내에 있는 요소가 변경될때 해당 함수가 호출된다.) 이때 observedAttributes 속성에 나열된 특성에서만 호출된다.
5. attributeChangedCallback 에서 관찰하는 항목을 리턴한다. (관찰 할 목록을 배열로 리턴하여 지정 해준다.)
6. custom element 가 제거될때 호출된다.
   
> 개발자 도구에서 title 속성을 바꿔봅시다.
title 이 변경되는 것을 볼 수 있습니다.
attributeChangedCallback() 과 observedAttrobutes() 없이 실행하면 해당 속성 값을 변경해도 반영되지 않습니다.
삭제 버튼을 눌러 커스텀 엘리먼트를 없애면 disconnectedCallback() 이 실행되는 것 또한 볼 수 있습니다.
주의할 점은 custom elemet 의 이름에 꼭 ‘-’ 가 포함되어야 합니다.



## 2. Shadow DOM
* Shadow DOM은 외부와 독립된 DOM이라고 보면 된다. 이 안에 생성된 HTML 요소는 외부 문서(e.g. index.html)와는 완전히 분리됐기 때문에 외부 문서에 적용된 CSS가 적용되지 않는 등의 이점이 있다. 예를 들어, index.html에 h1의 글자색을 blue로 설정한다고 해도 Shadow DOM 안에 생성된 h1에는 글자색이 적용되지 않는다.
* 쉐도우 돔은 마크업 구조와 스타일을 다른 코드 또는 컴포넌트, 메인페이지와 분리하여 충돌하지 않도록 하고, 기본 DOM 구조에 별도로 첨부할 수 있도록 해줍니다.
ShadowDOM 은 일반적으로 DOM 노드를 만들어 다른 요소의 자식으로 추가하는 것과는 달리, 요소에 연결은 되지만 독립된 범위가 지정된 DOM 트리를 만듭니다.

![Shadow DOM](https://blog.kakaocdn.net/dn/lfFWb/btqyEzVZpXZ/uKqUOvWC5nzCloWB3uVfp0/img.png)

* Shadow Host 가 생성되면 해당 DOM 트리의 shadow root 가 생성되고 그밑으로 독립적으로 생성된 element 들이 존재하게 됩니다.

> ShaodwDOM 의 특징
> - 자체적인 DOM 모델에서 작동한다. 일반적인 document.querySelector 로 Shaodw DOM 의 자식에 접근 할 수 없다.
> - Shadow DOM 의 스타일규칙 역시 범위가 해당 Shadow DOM 으로 국한되어 있다.
> - 브라우저가 이미 자체적으로 ShadowDOM 을 호출하는 있는 요소는 Shadow DOM 으로 호스팅 할 수 없다.


* Shadow DOM은 Tree로 생각할 수 있다. Shadow Root는 Shadow Tree의 상단이고, Shadow Tree가 연결된 요소(e.g. popup-info)는 Shadow Host라고 한다. Shadow Host에는 Shadow Root를 참조하는 shadowRoot라는 속성이 있고, Shadow Root에는 Shadow Host의 요소를 식별하는 host 속성이 있다.

### 2.1. Example

``` html
<h1>Shadow DOM 외부의 h1 요소</h1>
<popup-info></popup-info>
<popup-info></popup-info>
```
``` javascript
class PopupInfo extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' }); // (1)
        const title = document.createElement('h1');
        const content = document.createElement('p');

        title.innerHTML = '제목';
        content.innerHTML = '내용';

        shadow.append(title); // (2)
        shadow.append(content);
    }
}

customElements.define('popup-info', PopupInfo);
```
### 2.1. Notes
1. `attachShadow` 메서드를 사용하여 `popup-info`를 Shadow DOM Tree와 연결하고, 참조(this.shadowRoot)를 반환한다. 매개변수로 `mode`를 줄 수 있는데, Shadow Root 요소를 Root 외부의 JavaScript에서 액세스할 수 있냐, 없냐를 설정하는 부분이다. `open`과 `close` 두 가지로 설정할 수 있다.
`close`로 할 경우 맨 아래 `define` 메서드에서 Root를 액세스할 수 없어 요소를 생성할 수 없다. 그래서 close는 잘 사용하지 않는다.
2. `this`에서 `shadow`로 수정했다. 이렇게 해야 Shadow Tree에 속해 외부 문서와 분리될 수 있다.
Shadow DOM이 있을 경우에는 사용자 정의 요소의 자식 요소 대신 Shadow Tree가 렌더링 된다. `constructor` 안에 다음과 같이 내용을 추가해도 렌더링 되지 않는다.

> Shadow DOM이 있을 경우에는 사용자 정의 요소의 자식 요소 대신 Shadow Tree가 렌더링 된다. `constructor` 안에 다음과 같이 내용을 추가해도 렌더링 되지 않는다.


``` javascript
const h1 = document.createElement('h1');
h1.innerHTML = '나올까요?';
this.append(h1);
```

### 2.2. Example

``` html
<custom-ele-02 title="WC">
    <h1 slot="second">Custom Content</h1>
    <h2 slot="first">Custom Content</h1>
</custom-ele-02>
```

``` javascript
class CustomEle02 extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' }); // 1.
      this.shadowRoot.innerHTML = `
          <slot name="first"></slot>
          <slot name="second"></slot>
        ` // 2.
    }
}
window.customElements.define('custom-ele-02', CustomEle02);
```

### 2.2. Notes
1. `attachShadow` 를 이용하여 Shadow Tree 를 생성
2. shadow root 에 요소들을 추가

### 2.3. Example

``` html
<custom-ele-03 title="WC">
    <h1 slot="second">Custom Content</h1>
    <h2 slot="first">Custom Content</h1>
</custom-ele-03>
```

``` javascript
class CustomEle03 extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>h1{ color: blue; }</style>
        <h1>Custom Content</h1>
        <slot name="first"></slot>
        <slot name="second"></slot>
      ` // 1.
    }
}
window.customElements.define('custom-ele-03', CustomEle03);
```
### 2.3. Notes
1. Style 같은 경우도 위 특징에 설명 했듯이 외부 스타일의 영향을 받지 않고 독립적으로 지정이 가능


## 3. HTML templates
`<template>`이나 `<slot>` 요소를 사용하면 렌더링 된 페이지에 표시되지 않는 마크업 템플릿을 작성할 수 있다.

우리는 계속해서 `constructor` 메서드 안에 `document.createElement`를 사용해서 요소를 생성하고, `innerHTML`로 문구를 설정하고, `appendChild`로 요소를 삽입해왔다. 요소 하나를 추가하기 위해서 많은 작업이 필요하다. 이를 간단하게 해줄 수 있는 것이 template이다.
``` html
<template id="popup-info-03">
    <h1>제목</h1>
    <p>내용</p>
</template>
<h1>Shadow DOM 외부의 h1 요소</h1>
<popup-info-03></popup-info-03>
<popup-info-03></popup-info-03>
```
``` javascript
class PopupInfo03 extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById('popup-info-03');
        const templateContent = template.content;
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.append(templateContent.cloneNode(true)); // (1)
    }
}

customElements.define('popup-info-03', PopupInfo03);
```
1. js에서는 template의 content를 가져와 복사하고 있다. 복사하지 않을 경우 template 안의 내용이 첫 번째 사용자 정의 요소로 이동하여 여러 개를 생성할 수 없으므로 반드시 cloneNode 메서드를 사용하여 복사한다.
> template 요소 안에 작성한 내용은 렌더링 되지 않는다. 실제로 렌더링 해보면 DOM은 있지만 렌더링 되지 않는 것을 확인할 수 있다. 이는 template 요소가 가지고 있는 기본 특성 때문인데, template은 기본적으로 { display: none }이다.

* template 의 content 가 활성화 되기까지 기본적으로 template 은 비활성화 상태이다.
* template 이 사용 되기 전까지 template 내의 어떠한 스크립트나 마크업도 실행되지 않는다.
* template 이 활성화 되기 전 까지 메인페이지에서는 template 의 자식 노드들에게 접근 할 수 없다.
* template 을 활성화 시키기 위해서는 template 의 content 를 가져와서 붙여야 하는데 가장 좋은 방법은 원본 content 를 deep-copy 한 복사본을 만들어 페이지에 붙이는 것 이다.

``` html
<template id="popup-info-04">
    <h1><slot name="title">제목</slot></h1>
    <p><slot name="content">내용</slot></p>
</template>
<h1>Shadow DOM 외부의 h1 요소</h1>
<popup-info-04>
    <span slot="title">첫 번째 제목</span>
    <span slot="content">첫 번째 내용</span>
</popup-info-04>
<popup-info-04>
    <span slot="title">두 번째 제목</span>
    <span slot="content">두 번째 내용</span>
</popup-info-04>
<popup-info-04></popup-info-04>
```
> `template` 안 내용을 변경하고 싶은 요소에 `slot` 요소를 추가하고 `name` 속성으로 `slot`과 연결할 이름을 설정해 준다.
그리고 사용자 정의 요소 안에 span 요소를 추가하고 `slot` 속성으로 `slot` 이름과 매칭한다.

``` html
<template id="wc-template">
    <h1>WC - Template</h1>
</template>
```
``` javascript
if ('content' in document.createElement('template')) { // (1)
    console.log('supports Template');
    var wctemplate = document.querySelector('#wc-template');
    var clone = document.importNode(wctemplate, true); // (2)
    document.getElementById('main').appendChild(clone.content);
  } else {
    console.log('stop');
}
```
1. 현재 브라우저에서 Template 의 지원 여부를 확인
2. `importNode` 를 사용하여 복사본을 만든 뒤 페이지에 붙이며 활성화를 시작