import {Button, notification, Typography} from "antd";
import {useEffect, useState} from "react";
import {
    CheckOutlined,
    CloseOutlined,
    EyeOutlined
} from '@ant-design/icons';
import {Content} from "./content";
import {detectBot} from "../../lib/detect-bot";
const {Title} = Typography;

export const BrowserParse = () => {
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

    useEffect(() => {
        detectRobot()
    }, [])

    const onClick = () => {
        setContent(true)
        detectRobot();
    }

    return (
        <div className={'page'}>
            {
                !content && <Button id={'1'} onClick={onClick} type={'primary'} icon={<EyeOutlined />}>Показать контент</Button>
            }
            {
                content && <>
                    {
                        !bot ? (
                            <Content/>
                        ) : (
                            <Title level={4}>Контент предназначен только для реальных пользователей</Title>
                        )
                    }
              </>
            }
        </div>
    )
}