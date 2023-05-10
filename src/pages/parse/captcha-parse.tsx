import React, {useState} from "react";
import ReCAPTCHA from 'react-google-recaptcha'
import {Content} from "./content";
import {Typography} from "antd";
const {Title} = Typography;

export const CaptchaParse = () => {

    const [captcha, setCaptcha] = useState('');

    const onChange = (value: any) => {
        console.log('value', value);
        if (value) {
            setCaptcha(value);
        }
    }

    return <div className={'page'}>
        <div className={captcha ? 'hidden': ''}>
            <Title level={3}>Подтвердите, что вы не робот</Title>
            <ReCAPTCHA sitekey={'6LfvNc0lAAAAAOQzeDnxBBCkWKtS5vGVLJLo58np'} onChange={onChange}/>
        </div>
        {
            captcha && <Content/>
        }

    </div>
}