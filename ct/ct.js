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
    // for (let i = 0; i < placeholder.length; i++) {
    //     let input = document.createElement('input');
    //     input.type = 'text';
    //     numId += 1;
    //     input.id = `input_example${numId}`;
    //     input.placeholder = placeholder[i];
    //     document.querySelector('.card').appendChild(input);
    // }

    for (const item of placeholder) {
        console.log(item);

        let input = document.createElement('input');
        input.type = 'text';
        numId += 1;
        input.id = `input_example${numId}`;
        input.placeholder = item;
        document.querySelector('.card').appendChild(input);
    }
}