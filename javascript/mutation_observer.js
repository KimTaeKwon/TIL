// document.getElementById('add').addEventListener('click', addItem);

let count = 0;
// function addItem() {
//     let addLi = document.createElement('li');
//     count++;
//     addLi.innerText = count;
//     document.getElementById('list').append(addLi);
// }

let addItem = () => {
    let addLi = document.createElement('li');
    count++;
    addLi.innerText = count;
    document.getElementById('list').append(addLi);
}
document.getElementById('add').addEventListener('click', addItem);

// let observer = new MutationObserver(function(mutations){
//     mutations.forEach(function(mutation){ 
//         console.log(mutation.type);
//         console.log(mutation.target);
//         console.log(mutation.oldValue);
//     });
// });

let observer = new MutationObserver((mutations, observer) => {
    mutations.forEach(function(mutation){ 
        console.log(mutation.type);
        console.log(mutation.target);
        console.log(mutation.oldValue);
    });
});

let target = document.querySelector('.target');
let options = {
    subtree: true, 
    childList: true,
    characterData: true, 
    characterDataOldValue: true,
    attributes: true, 
    attributeFilter:["class"],
    attributeOldValue: true,
}
observer.observe(target, options);

// observer.takeRecords();
// observer.disconnect();