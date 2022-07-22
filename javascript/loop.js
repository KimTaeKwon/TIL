let example01Text = '';
for(let i = 0; i < 9; i++) {
    example01Text += i + '</br>'
}
document.getElementById('example01').innerHTML = example01Text;

let example02Text = '';
for(let i = 0;; i++) {
    if (i > 3) break;
    example02Text += i + '</br>'
}
document.getElementById('example02').innerHTML = example02Text;

let example03Text = '';
let i = 0;
for(;;) {
    if (i > 5) break;
    i++;
    example03Text += i + '</br>'
}
document.getElementById('example03').innerHTML = example03Text;

const items = ['item1', 'item2', 'item3'];
const copy = [];
items.forEach(function (item) {
    copy.push(item);
});
document.getElementById('example04').innerHTML = copy;

let numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt);
document.getElementById('example04').innerHTML = 'numbers : '+numbers + ' / ' + 'roots : ' + roots;