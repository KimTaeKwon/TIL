function Item(title, price) {

    // this = {};

    this.title = title;
    this.price = price;
    this.showPrice = function () {
        console.log(`${title} 가격은 ${price}원 입니다.`);
    }

    // return this;

}

const item1 = new Item("인형", 3000);
const item2 = new Item("가방", 5000);
const item3 = new Item("지갑", 7000);

console.log(item1,item2,item3);
item3.showPrice();

document.querySelector('#example01').innerHTML = `${item1.title} 가격은 ${item1.price}원 입니다.`;

var temp = document.createElement("div");
temp.innerHTML = `
<details open>
<summary>생성자 함수</summary>
<pre>
상품 객체를 생성해보자.

function Item(title, price) {

    // this = {}; new 호출시 자동

    this.title = title;
    // this는 item1, item2, item3 이다.
    this.price = price;
    this.showPrice = function () {
        console.log(\`\${title} 가격은 \${price}원 입니다.\`);
    }

    // return this; new 호출시 자동

}

const item1 = new Item("인형", 3000);
const item2 = new Item("가방", 5000);
const item3 = new Item("지갑", 7000);
// 생성자 함수는 꼭 new를 사용
console.log(item1,item2,item3);
item3.showPrice();

</pre>
</details>
`;
document.querySelector("#row").append(temp);