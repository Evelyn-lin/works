import React from 'react'
import { Card, Icon, Button, Spin, Alert } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import './ui.less';

export default class Loadings extends React.Component {
    render() {
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small" style={{ marginRight: 20 }} />
                    <Spin style={{ marginRight: 20 }} />
                    <Spin size="large" style={{ marginRight: 20 }} />
                    <Spin indicator={<Icon type="loading" />} style={{ marginRight: 20 }} />
                </Card>

                <Card title="内容遮罩" className="card-wrap">
                    <Alert
                        message="Warning"
                        description="有没有好好学习哦"
                        type="warning"
                        showIcon
                        style={{ marginBottom: 20 }}
                    />
                    <Alert
                        message="Info"
                        description="有没有好好学习哦"
                        type="info"
                        style={{ marginBottom: 20 }}
                        showIcon
                    />
                    <Spin tip="加载中..." indicator={<Icon type="loading" />} >
                        <Alert
                            message="Success"
                            description="有没有好好学习哦"
                            type="success"
                            showIcon
                            style={{ marginBottom: 20 }}
                        />
                    </Spin>
                    <Spin tip="加载中..." >
                        <Alert
                            message="Error"
                            description="有没有好好学习哦"
                            type="error"
                            showIcon
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}