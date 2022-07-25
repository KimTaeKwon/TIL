let button = document.querySelector('button');
button.addEventListener('click', addItem);
function addItem(event) {
    console.log(event);
}

// let divs_2 = document.querySelectorAll('div');
// divs_2.forEach(function (div) {
//     div.addEventListener('click', logEvent);
// });
// function logEvent(event) {
//     console.log(event.currentTarget.className);
// }

let divs_2 = document.querySelectorAll('#example02 div');
divs_2.forEach(function (div) {
    div.addEventListener('click', logEvent);
});
function logEvent(event) {
    console.log(event.currentTarget.className);
}


let divs_3 = document.querySelectorAll('#example03 div');
divs_3.forEach(function (div) {
    div.addEventListener('click', logEvent, {
        capture: true
    });
});
function logEvent(event) {
    console.log(event.currentTarget.className);
}

let divs_4 = document.querySelectorAll('#example04 div');
divs_4.forEach(function (div) {
    div.addEventListener('click', logEvent);
});
function logEvent(event) {
    event.stopPropagation();
    console.log(event.currentTarget.className);
}

let divs_5 = document.querySelectorAll('#example05 div');
divs_5.forEach(function (div) {
    div.addEventListener('click', logEvent, {
        capture: true
    });
});
function logEvent(event) {
    event.stopPropagation();
    console.log(event.currentTarget.className);
}

let inputs = document.querySelectorAll('#example06 input');
inputs.forEach(function (input) {
    input.addEventListener('click', function (event) {
        alert('clicked');
    });
});



let itemList = document.querySelector('#example07 .item-list');
itemList.addEventListener('click', function (event) {
    alert('clicked');
});


// let itemList_input = itemList.childNodes;
// itemList_input.addEventListener('click', function (event) {
//     alert('clicked');
// });


// let itemList = document.querySelectorAll('#example07 input');

// console.log(itemList);

// itemList.forEach(function (input) {
//     input.addEventListener('click', function (event) {
//         alert('clicked');
//     });
// });


let li = document.createElement('li');
let input = document.createElement('input');
let label = document.createElement('label');
let labelText = document.createTextNode('add Items');
input.setAttribute('type', 'checkbox');
input.setAttribute('id', 'item5');
label.setAttribute('for', 'item5');
label.appendChild(labelText);
li.appendChild(input);
li.appendChild(label);
itemList.appendChild(li);


// document.querySelector('#example07 .item-list').appendChild(li);

// var phone_number = ["01033334444","027778888"];
var phone_number = '01033334444';
function solution() {
    var answer = '';
    
    // var firstNum02 = phone_number.slice(0,firstNum);
    
    var arr = [...phone_number];
    var firstNum = phone_number.length - 4; //7
    for (let index = 0; index < firstNum; index++) {
        arr[index] = '*'
    }
    
    console.log(arr.toString().replace(/,/g,''));


    // return phone_number.slice(-4);

}
// function solution() {
//     var answer = '';
    
//     var firstNum = phone_number.length - 4;
//     // console.log(phone_number.slice(0,firstNum));
//     var firstNum02 = phone_number.slice(0,firstNum);
//     console.log(firstNum);
//     // console.log(phone_number.replace(firstNum02,"*******"));
//     return phone_number.replace(firstNum02,"*******");
//     // return phone_number.slice(-4);
//     return answer;
// }



solution();