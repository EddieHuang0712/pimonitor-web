"use client";
import React, { useState } from 'react';
import {Breadcrumb, Layout, theme} from "antd";
import {Content, Header, Footer} from "antd/es/layout/layout";
import SideBar from "@/app/(main)/componenrs/HeadBar";
import HeadBar from "@/app/(main)/componenrs/HeadBar";

export default function MainLayout({ children, }: { children: React.ReactNode }) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout>
                {/*<Header style={{padding: 0, background: colorBgContainer}}/>*/}
                {/*<SideBar/>*/}
                {/*<Content style={{ margin: '16px' }}>*/}
                {/*    /!*<Breadcrumb style={{ margin: '16px 0' }}>*!/*/}
                {/*    /!*    <Breadcrumb.Item>User</Breadcrumb.Item>*!/*/}
                {/*    /!*    <Breadcrumb.Item>Bill</Breadcrumb.Item>*!/*/}
                {/*    /!*</Breadcrumb>*!/*/}
                {/*    <div*/}
                {/*        style={{*/}
                {/*            padding: 24,*/}
                {/*            minHeight: 360,*/}
                {/*            background: colorBgContainer,*/}
                {/*            borderRadius: borderRadiusLG,*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        {children}*/}
                {/*    </div>*/}
                {/*</Content>*/}
                {/*<Footer style={{ textAlign: 'center' }}>*/}
                {/*    Ant Design ©{new Date().getFullYear()} Created by Ant UED*/}
                {/*</Footer>*/}
                {/*<Header style={{ display: 'flex', alignItems: 'center' }}>*/}
                {/*    <div className="demo-logo" />*/}
                {/*    <Menu*/}
                {/*        theme="dark"*/}
                {/*        mode="horizontal"*/}
                {/*        defaultSelectedKeys={['2']}*/}
                {/*        items={items}*/}
                {/*        style={{ flex: 1, minWidth: 0 }}*/}
                {/*    />*/}
                {/*</Header>*/}
                <HeadBar/>
                <Content style={{ margin: '16px' }}>
                    {/*<Breadcrumb style={{ margin: '16px 0' }}>*/}
                    {/*    <Breadcrumb.Item>User</Breadcrumb.Item>*/}
                    {/*    <Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    PiMonitor ©{new Date().getFullYear()} Created by Team200PI
                </Footer>
            </Layout>
        </Layout>
    );
}
