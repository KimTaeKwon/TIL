// function solution(numbers) {
//     const answer = numbers.map(x => x*2);
//     return answer;
// }
// solution([1, 2, 3, 4, 5]);
// solution([1, 2, 100, -99, 1, 2, 3]);

let solution = (numbers) => {
    numbers = document.querySelector('#input_example1').value;
    numbers = numbers.replace(/ /g,"").split(',');

    // const answer = numbers.map(function(element) {
    //     return element*2;
    // });
    // const answer = numbers.map((element) => {
    //     return element*2;
    // });
    // const answer = numbers.map((element) => element*2);
    
    const answer = numbers.map(element => element*2);
    document.querySelector('#example01').innerHTML = answer;
}

var temp = document.createElement("div");
temp.innerHTML = `
<details>
<summary>배열 두배 만들기</summary>
<pre>
문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
-10,000 ≤ numbers의 원소 ≤ 10,000
1 ≤ numbers의 길이 ≤ 1,000
입출력 예
numbers	result
[1, 2, 3, 4, 5]	[2, 4, 6, 8, 10]
[1, 2, 100, -99, 1, 2, 3]	[2, 4, 200, -198, 2, 4, 6]
입출력 예 설명
입출력 예 #1

[1, 2, 3, 4, 5]의 각 원소에 두배를 한 배열 [2, 4, 6, 8, 10]을 return합니다.
입출력 예 #2

[1, 2, 100, -99, 1, 2, 3]의 각 원소에 두배를 한 배열 [2, 4, 200, -198, 2, 4, 6]을 return합니다.
</pre>
</details>
`;
document.querySelector("#row").append(temp);

let placeholder = ['세 변의 길이'];