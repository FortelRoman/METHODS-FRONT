import React from "react";
import {Layout} from "antd";
import {DingtalkOutlined} from '@ant-design/icons';
import './page-header.css'

const {Header} = Layout;

const PageHeader = () => {

    return (
        <Header>
            <div className={'page__header'}>
                <div className={'logo'}>
                    <DingtalkOutlined />
                    <span className={'logo__text'}>Protection</span>
                </div>
            </div>
        </Header>
    );
};
export default PageHeader;