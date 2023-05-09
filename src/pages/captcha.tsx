import {SimplePage} from "./simple";
import React, {useState} from "react";
import ReCAPTCHA from 'react-google-recaptcha'

export const CaptchaPage = () => {

    const [captcha, setCaptcha] = useState('');

    const onChange = (value: any) => {
        console.log('value', value);
        if (value) {
            setCaptcha(value);
        }
    }


    return <>
        {
            !captcha ? <ReCAPTCHA sitekey={'6LfvNc0lAAAAAOQzeDnxBBCkWKtS5vGVLJLo58np'} onChange={onChange}/> :  <SimplePage/>
        }
    </>
}