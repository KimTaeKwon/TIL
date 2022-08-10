// siblings
function siblings(t) {
    const children = t.parentElement.children;
    const tempArr = [];
    for (let i = 0; i < children.length; i++) {
        tempArr.push(children[i]);
    };
    return tempArr.filter(function(e) {
        return e != t;
    });
}
// es6
var siblings = t => [...t.parentElement.children].filter(e => e != t);
var one = document.getElementById('idName');
console.log(siblings(one));