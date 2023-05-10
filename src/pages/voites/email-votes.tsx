import {Button, Modal, notification, Typography} from "antd";
import {RadioComponent} from "../../conponents/radio";
import {useForm} from "react-hook-form";
import React, {FC, useState} from "react";
import {data} from "./data";
import CustomInput from "../../conponents/input/CustomInput";
const {Title} = Typography;

type TState = Record<string, string>

const defaultValues = {}

export const EmailVotes = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);


    const methods = useForm<TState>({
        mode: 'onTouched',
        defaultValues,
    });

    const {control, handleSubmit, getValues, formState: {isValid, isSubmitted}} = methods;

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
        <div className={'page'}>
            <Title level={1}>Опрос</Title>
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
                <Button htmlType={'submit'} type={'primary'} disabled={!isSubmitted ? false : !isValid}>Отправить</Button>
            </form>
            {isModalOpen && <EmailModal isModalOpen={isModalOpen} handleCancel={handleCancel} onOk={onOk}/>}
        </div>
    )
}

type TProps = {
    isModalOpen: boolean,
    handleCancel: () => void,
    onOk: () => void,
}

type TEmail = {
    email: string,
}

type TCode = {
    code: string,
}

const EmailModal: FC<TProps> = ({isModalOpen, handleCancel, onOk}) => {

    const [isSend,setIsSend] = useState(false)

    const emailMethods = useForm<TEmail>({
        mode: 'onTouched',
        defaultValues: {email: ''},
    });
    const codeMethods = useForm<TCode>({
        mode: 'onTouched',
        defaultValues: {code: ''},
    });

    const onEmail = () => {
        setIsSend(true)
    }

    const onCode = () => {
        if (codeMethods.getValues('code') === emailMethods.getValues('email').slice(0, 4)) {
            onOk();
            handleCancel();
        } else {
            codeMethods.setError('code', { type: 'custom', message: 'Код неверный' })
        }
    }

    return (
        <Modal title="Подтвердите, что вы не робот" open={isModalOpen} centered onCancel={handleCancel} footer={null}>
            {
                !isSend ? (
                    <>
                        <CustomInput
                            name={'email'}
                            main={{
                                label: 'Введите email',
                                placeholder: 'Введите email-адрес',
                            }}
                            control={emailMethods.control}
                            rules={{
                                required: { message: 'Поле обязательное', value: true },
                            }}
                        />
                        <Button type='primary' onClick={emailMethods.handleSubmit(onEmail)} disabled={!emailMethods.formState.isSubmitted ? false : !emailMethods.formState.isValid}>Отправить код подтверждения</Button>
                    </>
                ) : (
                    <div>
                        <CustomInput
                            name={'code'}
                            main={{
                                label: 'Код подтверждения',
                                placeholder: 'Введите код подтверждения',
                            }}
                            control={codeMethods.control}
                            rules={{
                                required: { message: 'Поле обязательное', value: true },
                            }}
                        />
                        <Button type='primary' onClick={codeMethods.handleSubmit(onCode)} disabled={!codeMethods.formState.isSubmitted ? false : !codeMethods.formState.isValid}>Отправить</Button>
                    </div>

                )
            }
        </Modal>
    )
}