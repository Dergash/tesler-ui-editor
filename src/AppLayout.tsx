import React from 'react'
import {Layout} from 'antd'
import { AppSider } from './components/AppSider/AppSider'
import { View } from './components/View/View'
import { AppBar } from './components/AppBar/AppBar'

export const AppLayout: React.FC = (props) => {
    return <Layout>
        <Layout.Sider>
            <AppSider />
        </Layout.Sider>
        <Layout.Content>
            <Layout.Header>
                <AppBar />
            </Layout.Header>
            <View />
        </Layout.Content>
    </Layout> 
}