// function solution(numbers) {
//     var answer = 0;
//     var arr = numbers.sort((a, b) => b - a);
//     answer = arr[0]*arr[1];
//     return answer;
// }
// solution([1, 2, 3, 4, 5]);

let solution =(numbers) => {
    numbers = document.querySelector('#input_example1').value;
    numbers = numbers.replace(/ /g,"").split(',');
    var answer = 0;
    var arr = numbers.sort((a, b) => b - a);
    answer = arr[0]*arr[1];
    document.querySelector('#example01').innerHTML = answer;
    return answer;
}

var temp = document.createElement("div");
temp.innerHTML = `
<details>
<summary>최댓값 만들기 (1)</summary>
<pre>
문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ numbers의 원소 ≤ 10,000
2 ≤ numbers의 길이 ≤ 100
입출력 예
numbers	result
[1, 2, 3, 4, 5]	20
[0, 31, 24, 10, 1, 9]	744
입출력 예 설명
입출력 예 #1

두 수의 곱중 최댓값은 4 * 5 = 20 입니다.
입출력 예 #1

두 수의 곱중 최댓값은 31 * 24 = 744 입니다.
</pre>
</details>
`;
document.querySelector("#row").append(temp);

let placeholder = ['numbers'];