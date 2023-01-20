let arr = [3, 4, 5, 6];
let modifiedArr = arr.map(function(element) {
    return element*3;
});
document.querySelector('#example01').innerHTML = modifiedArr;

let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
];
let userFullnames = users.map(function(element) {
    return `${element.firstName} ${element.lastName}`;
});
document.querySelector('#example02').innerHTML = userFullnames;

// arr.map(function(element, index, array) {
// }, this);

// arr.map(function(element, index, array) {
//     console.log(this);
// }, 80);

arr.map(function(element, index, array) {
    console.log(element);
    console.log(index);
    console.log(array);
    return element;
}, 80);