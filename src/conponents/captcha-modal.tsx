import React, {FC} from "react";
import {Modal} from "antd";
import ReCAPTCHA from "react-google-recaptcha";

type TProps = {
    isModalOpen: boolean,
    handleCancel: () => void,
    onOk: () => void,
}

export const CaptchaModal: FC<TProps> = ({isModalOpen, handleCancel, onOk}) => {

    const onChange = (value: any) => {
        if (value) {
            onOk();
            handleCancel()
        }
    }

    return (
        <Modal title="Подтвердите, что вы не робот" open={isModalOpen} centered onCancel={handleCancel} footer={null}>
            <ReCAPTCHA sitekey={'6LfvNc0lAAAAAOQzeDnxBBCkWKtS5vGVLJLo58np'} onChange={onChange}/>
        </Modal>
    )
}