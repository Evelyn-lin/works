import React from 'react'
import { Card, Button, Tabs, message, Icon } from 'antd'
// import { AppleOutlined } from '@ant-design/icons'
import './ui.less';

export default class Loadings extends React.Component {
    state = {

    }
    componentWillMount() {
        const panes = [{
            title: 'Tab 1',
            content: 'Tab 1',
            key: '1'
        }, {
            title: 'Tab 2',
            content: 'Tab 2',
            key: '2'
        }, {
            title: 'Tab 3',
            content: 'Tab 3',
            key: '3'
        }];
        this.setState({
            panes,
            activeKey: panes[0].key,
        })
    }
    handleCallback = (key) => {
        message.info("当前点击的是" + key)
    }
    handleChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }
    newTabIndex = 0;
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };
    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab' + this.newTabIndex, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    };
    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };
    render() {
        const { TabPane } = Tabs;
        return (
            <div>
                <Card title="Tab页签" className="card-wrap" >
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1"> Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled> Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3"> Content of Tab Pane 3</TabPane>
                    </Tabs>

                </Card>
                <Card title="带图标的Tab页签" className="card-wrap" >
                    <Tabs defaultActiveKey="2" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="edit"/>Tab 1</span>} key="1"> Content of Tab Pane 1</TabPane>
                        <TabPane tab={<span><Icon type="plus"/>Tab 2</span>} key="2"> Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><Icon type="delete"/>Tab 3</span>} key="3"> Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="可编辑的Tab页签" className="card-wrap" >
                    < Tabs type="editable-card" onEdit={this.onEdit} activeKey={this.state.activeKey} onChange={this.handleChange} >
                        {
                            this.state.panes.map((pane) => {
                                return (
                                    <TabPane
                                        tab={pane.title}
                                        key={pane.key}>
                                        {pane.content}
                                    </TabPane>
                                )
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}