import {Button, Modal, notification, Typography} from "antd";
import {RadioComponent} from "../../conponents/radio";
import {useForm} from "react-hook-form";
import React, {FC, useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {data} from "./data";
const {Title} = Typography;

type TState = Record<string, string>

const defaultValues = {}

export const CaptchaVoites = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    const methods = useForm<TState>({
        mode: 'onTouched',
        defaultValues,
    });

    const {control, handleSubmit, getValues} = methods;

    const onOk = () => {
        notification.open({
            type: 'success',
            message: 'Ответ записан',
            description: JSON.stringify(getValues())
        })
    }

    const onSubmit = () => {
        setIsModalOpen(true)
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Title level={1}>Captcha voites</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    data.map(({label, name, options}, index) => (
                        <RadioComponent
                            main={{label: index + 1 + '. ' + label, options}}
                            name={name}
                            control={control}
                            rules={{required: { message: 'Поле обязательное', value: true }}}
                        />
                    ))
                }
                <Button htmlType={'submit'} type={'primary'}>Отправить</Button>
            </form>
            <CaptchaModal isModalOpen={isModalOpen} handleCancel={handleCancel} onOk={onOk}/>
        </>
    )
}

type TProps = {
    isModalOpen: boolean,
    handleCancel: () => void,
    onOk: () => void,
}

const CaptchaModal: FC<TProps> = ({isModalOpen, handleCancel, onOk}) => {

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