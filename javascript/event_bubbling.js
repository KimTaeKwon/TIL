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
