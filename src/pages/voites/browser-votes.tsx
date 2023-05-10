import {Button, notification, Typography} from "antd";
import {RadioComponent} from "../../conponents/radio";
import {useForm} from "react-hook-form";
import {data} from "./data";
import {useEffect, useState} from "react";
import {
    CheckOutlined,
    CloseOutlined,
    EyeOutlined
} from '@ant-design/icons';
import {detectBot} from "../../lib/detect-bot";
const {Title} = Typography;

type TState = Record<string, string>

const defaultValues = {}

export const BrowserVotes = () => {
    const [content, setContent] = useState(false);
    const [bot, setBot] = useState(false);

    const detectRobot = () => {
        const check = detectBot();
        notification.destroy();
        notification.open({
            message: 'Проверка браузера',
            duration: null,
            description: ( <div className={'bot-check'}>
                <div className={'check'}>
                    {!check.webdriver ? <CheckOutlined /> : <CloseOutlined />}
                    navigator.webdriver
                </div>
                <div className={'check'}>
                    {!check.windowCdcKeys ? <CheckOutlined /> : <CloseOutlined />}
                    windowCdcKeys
                </div>
                <div className={'check'}>
                    {!check.documentCdcKeys ? <CheckOutlined /> : <CloseOutlined />}
                    documentCdcKeys
                </div>
            </div>)
        })

        setBot(Object.values(check).some(Boolean))
    }


    const methods = useForm<TState>({
        mode: 'onTouched',
        defaultValues,
    });

    const {control, handleSubmit, formState: {isValid, isSubmitted}} = methods;

    const onSubmit = (values: TState) => {
        notification.open({
            type: 'success',
            message: 'Ответ записан',
            description: JSON.stringify(values)
        })
        console.log(values)
    }

    useEffect(() => {
        detectRobot()
    }, [])

    const onClick = () => {
        setContent(true)
        detectRobot()
    }

    return (
        <div className={'page'}>
            {
                !content && <Button id={'1'} onClick={onClick} type={'primary'} icon={<EyeOutlined/>}>Показать контент</Button>
            }
            {
                content && <>
                    <Title level={1}>Опрос</Title>
                    {
                        !bot ? (
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
                        ) : (
                            <Title level={4}>Тест предназначен только для реальных пользователей</Title>
                        )
                    }
              </>
            }
        </div>
    )
}