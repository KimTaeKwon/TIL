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


class PopupInfo02 extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' }); // (1)
        const title = document.createElement('h1');
        const content = document.createElement('p');
        
        title.innerHTML = '제목02';
        content.innerHTML = '내용02';
        
        shadow.append(title); // (2)
        shadow.append(content);
        
        const h1 = document.createElement('h1');
        h1.innerHTML = '나올까요?';
        this.append(h1);
    }
}
customElements.define('popup-info-02', PopupInfo02);


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


class PopupInfo04 extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById('popup-info-04');
        const templateContent = template.content;
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.append(templateContent.cloneNode(true)); // (1)
    }
}
customElements.define('popup-info-04', PopupInfo04);


if ('content' in document.createElement('template')) { // (1)
    console.log('supports Template');
    var wctemplate = document.querySelector('#wc-template');
    var clone = document.importNode(wctemplate, true); // (2)
    document.getElementById('main').appendChild(clone.content);
  } else {
    console.log('stop');
}

class CustomEle extends HTMLElement {
    constructor() {
      super(); // 생성자 에서는 보통 해당 엘리먼트에 포함된 함수를 초기화 한다.
    }
    connectedCallback() { // 커스텀 엘리먼트가 생성될때 실행된다.
      this.render();
    }
    adoptCallback() { } // 해당요소가 새로운 페이지나 문서로 이동 될 때마다 호출 된다.
    
    
    attributeChangedCallback(attrName, oldVal, newVal) { // 요소의 속성이 추가, 제거, 업데이트, 교체되는 부분을 관찰하고 호출된다. (커스텀 엘리먼트 내에 있는 요소가 변경될때 해당 함수가 호출된다.)
      this.render();                                     // 이때 observedAttributes 속성에 나열된 특성에서만 호출된다.
    }
    static get observedAttributes() { //attributeChangedCallback 에서 관찰하는 항목을 리턴한다. (관찰 할 목록을 배열로 리턴하여 지정 해준다.)
      return ['title'];
    }
    get title() {
      return this.getAttribute('title');
    }
    disconnectedCallback() { // custom element 가 제거될때 호출된다.
      alert('bye bye');
    }
    // custom method
    render() {
      this.innerHTML = `
      <h1>${this.title}</h1>
     `
    }
}
customElements.define('custom-ele', CustomEle);

document.querySelector('#delete-wc').addEventListener('click', function() {
    document.querySelector('custom-ele').remove();
});

// class CustomEle extends HTMLElement {

//     constructor() {
//       super();
//       this.attachShadow({ mode: 'open' });
//       this.render();
//     }

//     attributeChangedCallback(attrName, oldVal, newVal) {
//       this.render();
//     }

//     static get observedAttributes() {
//       return ['title'];
//     }

//     disconnectedCallback() {
//       alert('bye bye');
//     }

//     get title() {
//       return this.getAttribute('title');
//     }

//     render() {
//       this.shadowRoot.innerHTML =
//         `<slot>
//           <h1>${this.title}</h1>
//          </slot>
//       `;
//     }
// }
// customElements.define('custom-ele', CustomEle);


class CustomEle02 extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
          <slot name="first"></slot>
          <slot name="second"></slot>
        `
    }
}
window.customElements.define('custom-ele-02', CustomEle02);



class CustomEle03 extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>h1{ color: blue; }</style>
        <h1>Custom Content</h1>
        <slot name="first"></slot>
        <slot name="second"></slot>
      `
    }
}
window.customElements.define('custom-ele-03', CustomEle03);