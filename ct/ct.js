const URL_PARAMS = new URL(location.href).searchParams,
      PARAM_NUM = URL_PARAMS.get('case'),
      CT_SCRIPT = document.createElement('script');
CT_SCRIPT.type = 'text/javascript';
CT_SCRIPT.charset = 'utf-8';
CT_SCRIPT.src = `programmers_30_${PARAM_NUM}.js`;
CT_SCRIPT.id = PARAM_NUM;
document.head.appendChild(CT_SCRIPT);
let addInput = () => {
    let numId = 0;
    for (const item of placeholder) {
        let input = document.createElement('input');
        input.type = 'text';
        numId += 1;
        input.id = `input_example${numId}`;
        input.placeholder = item;
        input.setAttribute('onkeyup','doSolution()');
        document.querySelector('.card').appendChild(input);
    }
}
const doSolution = () => {
    if (window.event.keyCode == 13) {
        return solution();
   }
}