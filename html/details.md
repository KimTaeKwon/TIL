# [details](https://kimtaekwon.github.io/TIL/html/details.html)

## 1. 시작
``` html
<details>
    <summary>Details</summary>
    Something small enough to escape casual notice.
</details>
```
HTML `details` 요소는 "열림" 상태일 때만 내부 정보를 보여주는 정보 공개 위젯을 생성합니다. 요약이나 레이블은 `summary` 요소를 통해 제공할 수 있습니다.
정보 공개 위젯은 보통 레이블 옆의 작은 삼각형이 돌아가면서 열림/닫힘 상태를 나타냅니다. `details` 요소의 첫 번째 자식이 `summary` 요소라면, `summary`의 콘텐츠를 위젯의 레이블로 사용합니다.

## 2. 이벤트
``` javascript
details.addEventListener("toggle", event => {
    if (details.open) {
        /* the element was toggled open */
    } else {
        /* the element was toggled closed */
    }
});
```

## 3. 예제

### 3.1. 열려있는 상태로 만들기
``` html
<details open>
    <summary>System Requirements</summary>
    <p>Requires a computer running an operating system. The computer
    must have some memory and ideally some kind of long-term storage.
    An input device as well as some form of output device is
    recommended.</p>
</details>
```

### 3.2. 외형 바꾸기
``` css
details {
font: 16px "Open Sans", Calibri, sans-serif;
width: 620px;
}

details > summary {
padding: 2px 6px;
width: 15em;
background-color: #ddd;
border: none;
box-shadow: 3px 3px 4px black;
cursor: pointer;
}

details > p {
border-radius: 0 0 10px 10px;
background-color: #ddd;
padding: 2px 6px;
margin: 0;
box-shadow: 3px 3px 4px black;
}
```

### 3.3. 위젯 바꾸기
``` css
details {
font: 16px "Open Sans", Calibri, sans-serif;
width: 620px;
}

details > summary {
padding: 2px 6px;
width: 15em;
background-color: #ddd;
border: none;
box-shadow: 3px 3px 4px black;
cursor: pointer;
list-style: none;
}

details > summary::-webkit-details-marker {
display: none;
}

details > p {
border-radius: 0 0 10px 10px;
background-color: #ddd;
padding: 2px 6px;
margin: 0;
box-shadow: 3px 3px 4px black;
}

details[open] {
padding: .5em;
}
```