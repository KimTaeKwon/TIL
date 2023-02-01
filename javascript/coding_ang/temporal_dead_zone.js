console.log(name);
var name = 'Mike';
console.log(name);
var name = 'Jane';
console.log(name);

var temp = document.createElement("div");
temp.innerHTML = `
<details open>
<summary>생성자 함수</summary>
<pre>
 ↱ var는 선언하기 전에 사용할 수 있다.
var name; 👉 호이스팅(hoisting)
console.log(name); 👉 undefined
name = 'Mike'; ⤴️

var name = 'Mike';
console.log(name); 👉 Mike

 ↱ var는 한번 선언된 변수를 다시 선언할 수 있다.
var name = 'Jane';
console.log(name); 👉 Jane

let name = 'Mike';
console.log(name); 👉 Mike
let name = 'Jane';
console.log(name); ❌ error
</pre>
</details>
`;
document.querySelector("#row").append(temp);