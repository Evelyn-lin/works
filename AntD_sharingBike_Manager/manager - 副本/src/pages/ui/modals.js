import React from 'react'
import { Card, Button, Radio, Modal } from 'antd'
import './ui.less';
// import { ExclamationCircleOutlined} from '@ant-design/icons'
export default class Modals extends React.Component {
    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false,
    }
    handleOpen = (type) => {
        this.setState({
            [type]: true,
        })
    }
    handleOk = (type) => {
        this.setState({
            [type]: false,
        })
    }
    handleCancel = (type) => {
        this.setState({
            [type]: false,
        })
    }
    handleConfirm = (type) => {
        Modal[type](
            {
                title: '确认？',
                // icon:<ExclamationCircleOutlined />,
                content: '你确定你学会了React了吗',
                onOk() {
                    console.log('ok');
                },
                onCancel() {
                    console.log('cancel');
                }

            }
        )
    }
    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                    <Modal title="React"
                        visible={this.state.showModal1}
                        onCancel={() => this.handleCancel('showModal1')}>
                        <p>Open</p>
                    </Modal>
                    <Modal title="React"
                        visible={this.state.showModal2}
                        okText="好的"
                        cancelText="算了"
                        onCancel={() => this.handleCancel('showModal2')}>
                        <p>自定义页脚</p>
                    </Modal>
                    <Modal title="React"
                        visible={this.state.showModal3}
                        onCancel={() => this.handleCancel('showModal3')}
                        style={{ top: '20px' }}>
                        <p>顶部20px弹框</p>
                    </Modal>
                    <Modal title="React"
                        visible={this.state.showModal4}
                        centered={true}
                        onCancel={() => this.handleCancel('showModal4')}>
                        <p>水平垂直居中</p>
                    </Modal>
                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>Sucess</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('error')}>Error</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button>
                </Card>
            </div>
        )
    }
}