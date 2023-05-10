import { useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Menu, MenuProps, Layout} from "antd";
import { BarChartOutlined, PicCenterOutlined, FileTextOutlined, MailOutlined, PhoneOutlined, ChromeOutlined, RobotOutlined } from '@ant-design/icons';
import './page-sidebar.css'
const {Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const routes: MenuItem[] = [
    {
        key: '/parse',
        label: 'Парсинг',
        icon: <RobotOutlined style={{fontSize: '20px'}} />,
        children: [
            {
                key: '/parse/simple',
                label: 'Пример',
                icon: <FileTextOutlined style={{fontSize: '20px'}} />,
            },
            {
                key: '/parse/captcha',
                label: 'Капча',
                icon: <PicCenterOutlined style={{fontSize: '20px'}} />,
            },
            {
                key: '/parse/browser',
                label: 'Браузер',
                icon: <ChromeOutlined style={{fontSize: '20px'}} />,
            },
        ]
    },
    {
        key: '/votes',
        label: 'Накрутка голосов',
        icon: <BarChartOutlined style={{fontSize: '20px'}} />,
        children: [
            {
                key: '/votes/simple',
                label: 'Пример',
                icon: <FileTextOutlined style={{fontSize: '20px'}} />,
            },
            {
                key: '/votes/email',
                label: 'Электронная почта',
                icon: <MailOutlined style={{fontSize: '20px'}} />,
            },
            {
                key: '/votes/phone',
                label: 'Номер телефона',
                icon: <PhoneOutlined style={{fontSize: '20px'}} />,
            },
            {
                key: '/votes/captcha',
                label: 'Капча',
                icon: <PicCenterOutlined style={{fontSize: '20px'}} />,
            },
            {
                key: '/votes/browser',
                label: 'Браузер',
                icon: <ChromeOutlined style={{fontSize: '20px'}} />,
            },
        ]
    },
];

const PageSidebar = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const [selectedKeys, setSelectedKeys] = useState([]);

    useEffect(() => {
        setSelectedKeys([])

        routes.forEach((route) => {
            //@ts-ignore
            route.children.forEach(({key}) => {
                console.log('key', key);
                console.log('pathname', pathname);
                console.log('---');
                if (pathname.includes(key)) {
                    //@ts-ignore
                    setSelectedKeys((prev) => ([...prev, key]))
                }
            })
        })
    }, [pathname])

    return (
        <Sider collapsible width={300} collapsedWidth={100} >
            <div className={'menu'}>
                <Menu
                    selectedKeys={selectedKeys}
                    defaultOpenKeys={['/votes', '/parse']}
                    mode="inline"
                    //@ts-ignore
                    items={routes}
                    onClick={({key}) => navigate(key)}
                />
            </div>
        </Sider>
    );
};
export default PageSidebar;