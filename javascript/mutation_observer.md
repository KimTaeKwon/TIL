# [MutationObserver](https://kimtaekwon.github.io/TIL/javascript/mutation_observer.html)

## MutationObserver

* MutationObserver API는 DOM 요소의 "속성", "텍스트", "자식 노드"가 변경 되었는지를 감시하는 API 이다.

​* MutationObserver 옵션
1. subtree: 대상(target) 노드만 관찰 할건지.. 하위 모든 요소들도 관찰할건지 설정 - (true, false)
2. childList: 자식 노드가 변경(추가 및 제거) 되었는지 관찰 - (true, false)
3. characterData: 텍스트 노드가 변경되었는지 관찰 - (true, false)
4. characterDataOldValue: 텍스트가 변경되기 이전의 값, 가져올건지 여부 (true, false)
5. attributes: 속성이 변경 되었는지 관찰 - (true, false)
6. attributeFilter: 특정 속성만 관찰  -  ["class", "id", "src", "data-name"]
7. attributeOldValue: 속성이 변경되기 이전의 값, 가져올건지 여부 (true, false)



### 1.1. Example

``` javascript
var observer = new MutationObserver(function(mutations){ // 1.
    mutations.forEach(function(mutation){ 
        console.log(mutation.type);  // 2.
        console.log(mutation.target);  // 3.
        console.log(mutation.oldValue);  // 4.
    });
});

var target = document.querySelector('.target'); // 5.
var options = {
    subtree: true, 
    childList: true,
    characterData: true, 
    characterDataOldValue: true,
    attributes: true, 
    attributeFilter:["class"], // 6.
    attributeOldValue: true,
}
observer.observe(target, options);

observer.takeRecords(); // 7.

observer.disconnect(); // 8.
```

### 1.1. Notes
1. DOM 요소가 변경 되었을때.. 실행될 구문 작성
2. 옵션 유형
3. 변경된 요소
4. 이전 값(attributeFilter, attributeOldValue 값이 true 일때만 유효)
5. 감시 시작
6. class 속성만 관찰하기
7. 콜백 함수에 의해 처리되지 않은 모든 매칭 DOM 변경 목록을 반환
8. 감시 중지

[참고](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)