# [importNode](https://kimtaekwon.github.io/TIL/javascript/importNode.html)

## 노드의 복사

- var node = document.importNode('복제 원하는 노드', boolean : 자식 노드 포함 여부);
- 반환 : [True인경우 : 자식 포함], [False인 경우 : 자식 미포함]

### 1.1. Example

``` html
<template>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</template>
<table>
    <thead>
        <tr>
            <td>번호</td>
            <td>제목</td>
            <td>내용</td>
        </tr>
    </thead>
    <tbody></tbody>
</table>
```

``` javascript
let temp = document.querySelector('template');
let tbody = document.querySelector('tbody');

let db = [ // 1.
    {'id':'1','title':'title1','content':'content1'},
    {'id':'2','title':'title2','content':'content2'},
    {'id':'3','title':'title3','content':'content3'}
];

for (let i = 0; i < db.length; i++) { // 2.
    let copyAllChild = document.importNode(temp.content,true).firstElementChild; // 3.
    copyAllChild.children[0].innerText = db[i].id;
    copyAllChild.children[1].innerText = db[i].title;
    copyAllChild.children[2].innerText = db[i].content;

    tbody.append(copyAllChild);
}
```

### 1.1. Notes
1. 데이터 SET
2. 테이블 내용 생성
3. TR (자식노드 까지 복사)


### 1.2. Example

``` html
<iframe src="/index2.php" style="height:380px;width:520px;"></iframe>
<button onclick="getItem()">Import</button>
```

``` javascript
function getItem() {
    const frame = document.getElementsByTagName("IFRAME")[0];
    const h1 = frame.contentWindow.document.getElementsByTagName("H1")[0];
    const node = document.importNode(h1, true);
    document.body.appendChild(node);
}
```

### 1.1. Notes
1. 

[참고](https://developer.mozilla.org/ko/docs/Web/API/Document/importNode)