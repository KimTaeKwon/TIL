let temp = document.querySelector('template');
let tbody = document.querySelector('tbody');

let db = [
    {'id':'1','title':'title1','content':'content1'},
    {'id':'2','title':'title2','content':'content2'},
    {'id':'3','title':'title3','content':'content3'}
];

for (let i = 0; i < db.length; i++) {
    let copyAllChild = document.importNode(temp.content,true).firstElementChild;
    copyAllChild.children[0].innerText = db[i].id;
    copyAllChild.children[1].innerText = db[i].title;
    copyAllChild.children[2].innerText = db[i].content;

    tbody.append(copyAllChild);
}

function getItem() {
    const frame = document.getElementsByTagName("IFRAME")[0];
    const h1 = frame.contentWindow.document.getElementsByTagName("H1")[0];
    const node = document.importNode(h1, true);
    document.body.appendChild(node);
}