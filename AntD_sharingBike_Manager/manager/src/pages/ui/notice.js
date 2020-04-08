import React from 'react'
import { Card, Button, notification } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined, ArrowDownOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import './ui.less';

export default class Notice extends React.Component {
    openNoticfication = (type, derection) => {
        if (derection) {
            notification.config({
                placement:derection
            })
        }
        notification[type]({
            message: "sucess",
            description: "恭喜你成功啦"
        })
    }
    render() {
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNoticfication('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.openNoticfication('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.openNoticfication('warning')}>Warning</Button>
                    <Button type="primary" onClick={() => this.openNoticfication('error')}>Error</Button>
                </Card>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={() => this.openNoticfication('success','topLeft')}>topLeft</Button>
                    <Button type="primary" onClick={() => this.openNoticfication('info','topRight')}>topRight</Button>
                    <Button type="primary" onClick={() => this.openNoticfication('warning','bottomLeft')}>bottomLeft</Button>
                    <Button type="primary" onClick={() => this.openNoticfication('error','bottomRight')}>bottomRight</Button>
                </Card>
            </div>
        )
    }
}