

import React from 'react'
import { Card, Table, Radio, Modal, Button, message, Badge } from 'antd'
import axios from '../../axios/index'

export default class HighTable extends React.Component {
    state = {
       
    }
    request = () => {
        axios.ajax({
            url: '/table/high/list',
            data: {
                params: {
                    page: 1
                }
            },
            isMock:true
        }).then(res => {
            res.result.list.map((item, index) => {
                item.key = index
            })
            this.setState({
                dataSource2: res.result.list
            })
        })
    }
    handleChange = (pagination, filters, sorter) => {
        this.setState({
            sortOrder: sorter.order,
        })
    }
    handleDelete = (item) => {
        console.log(item);

        let id = item.id;
        Modal.confirm({
            title: "确认",
            content: `你确定要删除此条数据吗`,
            onOk: () => {
                message.info('已删除');
                this.request();
            }
        })
    }
    componentDidMount() {
        this.request();
        const dataSource1 = [
            {
                userName: 'Jack',
                sex: 2,
                state: 1,
                interest: 4,
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00',
                isMarried: 2,
                age: 12,
            },
            {
                userName: 'Snake',
                sex: 1,
                state: 2,
                interest: 3,
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00',
                isMarried: 2,
                age: 46,
            },
            {
                userName: 'Lily',
                sex: 1,
                state: 4,
                interest: 2,
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00',
                isMarried: 1,
                age: 33,
            },
            {
                userName: 'Faker',
                sex: 2,
                state: 3,
                interest: 4,
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00',
                isMarried: 1,
                age: 24,
            },
            {
                userName: 'Jakey',
                sex: 2,
                state: 1,
                interest: 4,
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00',
                isMarried: 1,
                age: 20,
            },
            {
                userName: 'Uzi',
                sex: 2,
                state: 1,
                interest: 3,
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00',
                isMarried: 1,
                age: 24,
            },
            {
                userName: 'Ming',
                sex: 2,
                state: 1,
                interest: 2,
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00',
                isMarried: 2,
                age: 67,
            },
        ]
        
        dataSource1.map((item, index) => {
            item.key = index;
            item.id = index + 1
        })
        this.setState({ dataSource1})
    }
    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 40,
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 40,
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 40,
                render(sex) {
                    return 'sex' == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 60,
                render(state) {
                    return {
                        1: '咸鱼',
                        2: '斜杠青年',
                        3: '老师',
                        4: '程序猿'
                    }[state]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                width: 60,
                render(interest) {
                    return (
                        {
                            '1': '游泳',
                            '2': '爬山',
                            '3': '跑步',
                            '4': '唱歌',
                            '5': '敲代码',
                            '6': '跳舞',
                        }[interest]
                    )
                }

            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width: 60,

            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 80,

            },
            {
                title: '时间',
                dataIndex: 'time',
                width: 60,

            }
        ]
        const columns2 = [
            {
                title: 'id',
                dataIndex: 'id',
                width: 80,
                fixed:'left'
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width: 80,
                fixed:'left'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return 'sex' == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                width: 80,
                render(state) {
                    return {
                        1: '咸鱼',
                        2: '斜杠青年',
                        3: '老师',
                        4: '程序猿'
                    }[state]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                width: 80,
                render(interest) {
                    return (
                        {
                            '1': '游泳',
                            '2': '爬山',
                            '3': '跑步',
                            '4': '唱歌',
                            '5': '敲代码',
                            '6': '跳舞',
                        }[interest]
                    )
                }

            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width: 100,

            },
            {
                title: '地址',
                dataIndex: 'address',
                width: 100,

            },
            {
                title: '时间',
                dataIndex: 'time',
                width: 100,
                fixed:'right'
            }
        ]
        const columns3 = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'username'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者',
                    }
                    return config[state]
                }
            },
            {
                title: '年龄',
                dataIndex: 'age',
                sorter: (a, b) => {
                    return a.age - b.age
                },
                sortOrder: this.state.sortOrder,
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': '游泳',
                        '2': '爬山',
                        '3': '跑步',
                        '4': '唱歌',
                        '5': '敲代码',
                        '6': '跳舞',
                        '7': '写作',
                        '8': '追剧',

                    }
                    return config[interest]
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '时间',
                dataIndex: 'time'
            }
        ]
        const columns4 = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'username'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state]
                }
            },
            {
                title: '年龄',
                dataIndex: 'age',
            },
            {
                title: '徽标',
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': <Badge status="success" text="成功" />,
                        '2': <Badge status="error" text="报错" />,
                        '3': <Badge status="processing" text="进行中" />,
                        '4': <Badge status="warning" text="警告" />,
                        '5': <Badge status="default" text="失败" />,
                        '6': <Badge status="default" text="失败" />,
                        '7': <Badge status="warning" text="警告" />,
                        '8': <Badge status="default" text="失败" />,
                    }
                    return config[interest]
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '操作',
                dataIndex: 'time',
                render: (text, item) => {
                    return <a onClick={
                        (item) => {
                            this.handleDelete(item)
                        }
                    }>删除</a>
                }
            }
        ]
        columns2.map((item, index) => {
            item.key = index
        })
        return (
            <div>
                <Card title="头部固定">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource1}
                        pagination={false}
                        scroll={{ y: 240 }}
                    />
                </Card>
                <Card title="两侧固定" style={{ marginTop: 10 }}>
                    <Table
                        columns={columns2}
                        dataSource={this.state.dataSource1}
                        pagination={false}
                        scroll={{ x: 1300 }}
                    />
                </Card>
                <Card title="表格排序" style={{ marginTop: 10 }}>
                    <Table
                        columns={columns3}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="操作按钮" style={{ marginTop: 10 }}>
                    <Table
                        columns={columns4}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}