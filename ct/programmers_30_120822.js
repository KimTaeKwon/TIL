// function solution(my_string) {
//     var answer = [...my_string].reverse().join('');
//     return answer;
// }
// solution('jaron');

let solution =(my_string) => {
    my_string = document.querySelector('#input_example1').value;
    var answer = [...my_string].reverse().join('');
    document.querySelector('#example01').innerHTML = answer;
}

var temp = document.createElement("div");
temp.innerHTML = `
<details>
<summary>문자열 뒤집기</summary>
<pre>
문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
입출력 예
my_string	return
"jaron"	"noraj"
"bread"	"daerb"
입출력 예 설명
입출력 예 #1

my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.
입출력 예 #2

my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.
</pre>
</details>
`;
document.querySelector("#row").append(temp);

let placeholder = ['my_string'];