let arr = [1,2,3,4,5];
let arr2 = [...arr];

console.log(arr, arr2); //  arr이랑 같죠? arr의 값을 펼친겁니다
console.log(arr === arr2); // 데이터 자체는 같다고 나오지 않는 걸 볼 수 있습니다.

arr[5] = 9; // 각각 독립적인 값을 가지도록 복사 가능 Deep copy
console.log(arr);
console.log(arr2);

let arr3 = [...arr,3,4,5]; // 다른 배열에 값을 삽입
console.log(arr3);

function add(a,b) {
    return a + b;
}
let arr4 = [1,2];
console.log(add(...arr4));
//연산 함수나 아니면 인자값이 필요한 함수를 실행할 때, 이런식으로 인자값에 배열의 값을 넣어 줄 수 있습니다.

let array1 = 'hello';
console.log(...array1); // 문자 인덱싱 가능, 배열은 아님

let array2 = {a:1, b:2};
let array3 = {...array2, c:3};
console.log(array3);

let person = {
    hi : function() {
        console.log(this.name + 'hello');
    }
}
let person2 = {
    name : 'TK'
}
console.log(person2);
console.log(person.hi.apply(person2));
console.log(person.hi());