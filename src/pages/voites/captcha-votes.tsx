import {Button, notification, Typography} from "antd";
import {RadioComponent} from "../../conponents/radio";
import {useForm} from "react-hook-form";
import React, {useState} from "react";
import {data} from "./data";
import {CaptchaModal} from "../../conponents/captcha-modal";
const {Title} = Typography;

type TState = Record<string, string>

const defaultValues = {}

export const CaptchaVotes = () => {

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
            <CaptchaModal isModalOpen={isModalOpen} handleCancel={handleCancel} onOk={onOk}/>
        </div>
    )
}