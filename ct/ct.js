const URL_PARAMS = new URL(location.href).searchParams,
      PARAM_NUM = URL_PARAMS.get('case'),
      CT_SCRIPT = document.createElement('script');
CT_SCRIPT.type = 'text/javascript';
CT_SCRIPT.charset = 'utf-8';
CT_SCRIPT.src = `programmers_30_${PARAM_NUM}.js`;
CT_SCRIPT.id = PARAM_NUM;
document.head.appendChild(CT_SCRIPT);

let numId = 0;
function addInput() {
    let input = document.createElement('input');
    numId += 1;
    input.type = 'text';
    input.id = `input_example${numId}`;
    document.querySelector('.card').appendChild(input);
}