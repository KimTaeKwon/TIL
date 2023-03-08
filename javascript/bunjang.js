const costList = document.querySelectorAll('.jAliHD'); // select price section
for (let obj in costList) {
    const num = parseInt(costList[obj].innerHTML.replace(/,/g , ''));
    costList[obj].innerHTML = num;
    if (num < 300000) { // Setting the price Range
        costList[obj].style.background = 'red';
    }
}