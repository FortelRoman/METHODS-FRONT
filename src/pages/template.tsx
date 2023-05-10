import {Outlet} from "react-router-dom";
import {Layout} from "antd";
import React from "react";
import PageHeader from "../blocks/page-header/page-header";
import PageSidebar from "../blocks/page-sidebar/page-sidebar";

const { Content } = Layout;

const Template = () => {

    return (
        <Layout>
           <PageHeader/>
            <Layout hasSider>
                <PageSidebar />
                <Layout>
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default Template;