const URL_PARAMS = new URL(location.href).searchParams,
      PARAM_NAME = URL_PARAMS.get('case'),
      CT_SCRIPT = document.createElement('script');
CT_SCRIPT.type = 'text/javascript';
CT_SCRIPT.charset = 'utf-8';
CT_SCRIPT.src = `${PARAM_NAME}.js`;
CT_SCRIPT.id = PARAM_NAME;

document.head.appendChild(CT_SCRIPT);