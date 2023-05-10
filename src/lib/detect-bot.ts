const checkWebdriver = () => {
    return navigator.webdriver;
}

const checkWindowCdcKeys = () => {
    // @ts-ignore
    return window.cdc_adoQpoasnfa76pfcZLmcfl_Array || window.cdc_adoQpoasnfa76pfcZLmcfl_Promise || window.cdc_adoQpoasnfa76pfcZLmcfl_Symbol;
}

const checkDocumentCdcKeys = () => {
    for (const documentKey in window['document']) {
        // @ts-ignore
        if (documentKey.match(/\$[a-z]dc_/) && window['document'][documentKey]['cache_']) {
            // @ts-ignore
            console.log('documentKey', documentKey)
            return true;
        }
    }
    return false
}

export const detectBot = () => {
    const check = {
        webdriver: false,
        windowCdcKeys: false,
        documentCdcKeys: false,
    }

    if (checkWebdriver()) check.webdriver = true;
    if (checkWindowCdcKeys()) check.windowCdcKeys = true;
    if (checkDocumentCdcKeys()) check.documentCdcKeys = true;

    return check;
}