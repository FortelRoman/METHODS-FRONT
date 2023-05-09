import React from 'react';
import './App.css';
// import {SimplePage} from "./pages/simple";
// import {CaptchaPage} from "./pages/captcha";
// import {SimpleVoites} from "./pages/voites/simple-voites";
// import {CaptchaVoites} from "./pages/voites/captcha-voites";
// import {EmailVoites} from "./pages/voites/email-voites";
// import {PhoneVoites} from "./pages/voites/phone-voites";

export const App = () =>  {

    // const [bot, setBot] = useState(false)

    const checkWebdriver = () => {
        return navigator.webdriver;
    }

    const checkWindowCdcKeys = () => {
        // @ts-ignore
        return window.cdc_adoQpoasnfa76pfcZLmcfl_Array || window.cdc_adoQpoasnfa76pfcZLmcfl_Promise || window.cdc_adoQpoasnfa76pfcZLmcfl_Symbol;
    }

    const checkDocumentCdcKeys = () => {
        for (const documentKey in window['document']) {
            // console.log('documentKey', documentKey);
            // @ts-ignore
            // console.log('value', window['document'][documentKey]);
            // @ts-ignore
            if (documentKey.match(/\$[a-z]dc_/) && window['document'][documentKey]['cache_']) {
                // @ts-ignore
                console.log('documentKey', documentKey)
                return true;
            }
        }
        return false
    }

    const detectBot = () => {
        console.log('webDriver', checkWebdriver());
        console.log('windowCdcKeys', !!checkWindowCdcKeys());
        console.log('documentCdcKeys', checkDocumentCdcKeys());
        console.log('------')
    }



    // const detectBot1 = () => {
    //         var documentDetectionKeys = [
    //             "__webdriver_evaluate",
    //             "__selenium_evaluate",
    //             "__webdriver_script_function",
    //             "__webdriver_script_func",
    //             "__webdriver_script_fn",
    //             "__fxdriver_evaluate",
    //             "__driver_unwrapped",
    //             "__webdriver_unwrapped",
    //             "__driver_evaluate",
    //             "__selenium_unwrapped",
    //             "__fxdriver_unwrapped",
    //         ];
    //
    //         var windowDetectionKeys = [
    //             "_phantom",
    //             "__nightmare",
    //             "_selenium",
    //             "callPhantom",
    //             "callSelenium",
    //             "_Selenium_IDE_Recorder",
    //         ];
    //
    //         for (const windowDetectionKey in windowDetectionKeys) {
    //             const windowDetectionKeyValue = windowDetectionKeys[windowDetectionKey];
    //             // @ts-ignore
    //             if (window[windowDetectionKeyValue]) {
    //                 return true;
    //             }
    //         };
    //         for (const documentDetectionKey in documentDetectionKeys) {
    //             const documentDetectionKeyValue = documentDetectionKeys[documentDetectionKey];
    //             // @ts-ignore
    //             if (window['document'][documentDetectionKeyValue]) {
    //                 return true;
    //             }
    //         };

            // if (window['external'] && window['external'].toString() && (window['external'].toString()['indexOf']('Sequentum') != -1)) return true;
            //
            // if (window['document']['documentElement']['getAttribute']('selenium')) return true;
            // if (window['document']['documentElement']['getAttribute']('webdriver')) return true;
            // if (window['document']['documentElement']['getAttribute']('driver')) return true;

    //
    //
    //     // @ts-ignore
    //     // alert(window.domAutomation !== undefined || window.domAutomationController !== undefined) // no
    //
    //     // @ts-ignore
    //     // alert(window.outerWidth === 0 && window.outerHeight === 0) // no
    //
    //     // @ts-ignore
    //     // alert(window.navigator.onLine === false) // no
    //
    //     // @ts-ignore
    //     // alert(window.Buffer !== undefined) // no
    //
    //     // @ts-ignore
    //     // alert(window.emit !== undefined) // no
    //
    //     // @ts-ignore
    //     // alert(window.spawn !== undefined) // no
    //
    //     // @ts-ignore
    //     // alert((navigator.plugins instanceof PluginArray) === false || navigator.plugins.length == 0) // no
    //
    //     // @ts-ignore
    //     // alert(navigator.product) // no
    //
    //     // console.log(navigator)
    //
    //     // navigator.clipboard.writeText(JSON.stringify(navigator))
    //     // var agent_dump = [
    //     //     ['Aport', 'Aport robot'],
    //     //     ['Google', 'Google'],
    //     //     ['msnbot', 'MSN'],
    //     //     ['Rambler', 'Rambler'],
    //     //     ['Yahoo', 'Yahoo'],
    //     //     ['AbachoBOT', 'AbachoBOT'],
    //     //     ['accoona', 'Accoona'],
    //     //     ['AcoiRobot', 'AcoiRobot'],
    //     //     ['ASPSeek', 'ASPSeek'],
    //     //     ['CrocCrawler', 'CrocCrawler'],
    //     //     ['Dumbot', 'Dumbot'],
    //     //     ['FAST-WebCrawler', 'FAST-WebCrawler'],
    //     //     ['GeonaBot', 'GeonaBot'],
    //     //     ['Gigabot', 'Gigabot'],
    //     //     ['Lycos', 'Lycos spider'],
    //     //     ['MSRBOT', 'MSRBOT'],
    //     //     ['Scooter', 'Altavista robot'],
    //     //     ['AltaVista', 'Altavista robot'],
    //     //     ['WebAlta', 'WebAlta'],
    //     //     ['IDBot', 'ID-Search Bot'],
    //     //     ['eStyle', 'eStyle Bot'],
    //     //     ['Mail.Ru', 'Mail.Ru Bot'],
    //     //     ['Scrubby', 'Scrubby robot'],
    //     //     ['Yandex', 'Yandex'],
    //     //     ['Mediapartners-Google', 'Mediapartners-Google (Adsense)'],
    //     //     ['Slurp', 'Hot Bot search'],
    //     //     ['WebCrawler', 'WebCrawler search'],
    //     //     ['ZyBorg', 'Wisenut search'],
    //     //     ['ia_archiver', 'Alexa search engine'],
    //     //     ['FAST', 'AllTheWeb'],
    //     //     ['YaDirectBot', 'Yandex Direct']
    //     // ];
    //     //
    //     // for(var j=0;j<agent_dump.length;j++) {
    //     //     if(window.navigator.userAgent.toLowerCase().indexOf(agent_dump[j][0].toLowerCase())!=-1) {
    //     //         return agent_dump[j][1];
    //     //     }
    //     // }
    //     //
    //     // return false;
    // }

    // const detectBot = () => {
    //     @ts-ignore
        // console.log('document.$cdc_asdjflasutopfhvcZLmcfl_', document.$cdc_asdjflasutopfhvcZLmcfl_)
        // console.log('navigator.webdriver', navigator.webdriver)
        // console.log('window[\'document\'][\'documentElement\'][\'getAttribute\'](\'selenium\')', window['document']['documentElement']['getAttribute']('selenium'))
    // }
    //
    // console.log('detectBot1', detectBot1());
    detectBot()

  return (
   <div>
       <button id={'1'} onClick={() => console.log('click')}>CLick</button>
       <button id={'2'} onClick={detectBot}>Detect bot</button>
       {/*<div>{!bot ? 'It is no bot' : 'It is bot'}</div>*/}
     {/*  <CaptchaPage/>   */}
     {/*  <SimpleVoites/>  */}
     {/*  <CaptchaVoites/> */}
     {/*  <EmailVoites/>   */}
     {/*  <PhoneVoites/>   */}
   </div>
  );
}

export default App;
