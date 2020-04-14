import React from 'react'
import { Card, Table, Radio, Modal, Button, message } from 'antd'
import axios from '../../axios/index'
import Utils from '../../utils/utils';

export default class BasicTable extends React.Component {
    state = {
        dataSource2: []
    }
    params = {
        page: 1
    }
    componentDidMount() {
        this.request();
        // const data = [
        //     {
        //         key: 1,
        //         id: '0',
        //         userName: 'Jack',
        //         sex: '男',
        //         state: '1',
        //         interest: '羽毛球',
        //         birthday: '2000-01-01',
        //         address: '北京市海淀区奥林匹克公园',
        //         time: '09:00'
        //     },
        //     {
        //         key: 2,
        //         id: '1',
        //         userName: 'Tom',
        //         sex: '男',
        //         state: '1',
        //         interest: '篮球',
        //         birthday: '2000-01-01',
        //         address: '北京市海淀区奥林匹克公园',
        //         time: '09:00'
        //     },
        //     {
        //         key: 3,
        //         id: '2',
        //         userName: 'Lily',
        //         sex: '女',
        //         state: '1',
        //         interest: '画画',
        //         birthday: '2000-01-01',
        //         address: '北京市海淀区奥林匹克公园',
        //         time: '09:00'
        //     },
        // ]

        // this.setState({ dataSource: data })

    }

    //动态获取mock数据
    request = () => {
        // let baseUrl = 'https://www.easy-mock.com/mock/5e757e11393539712a237a39/evelyn';
        // axios.get(baseUrl + '/table/list').then((res) => {
        //     this.setState({
        //         dataSource2:res.data.list
        //     })
        // })
        let _this = this;
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: this.params.page
                },
                isShowLoading: true
            },
            isMock:true
        }).then(res => {
            res.result.list.map((item, index) => {
                item.key = index
            })
            this.setState({
                dataSource: res.result.list,
                selectedCheckRowKeys: [],
                selectedCheckRows: null,
                pagination: Utils.pagination(res, (current) => {
                    _this.params.page = current;
                    this.request();
                })
            })
        })
    }

    onRowClick = (record, index) => {
        let selectKey = [index + 1];
        // Modal.info({
        //     content: `用户名是：${record.userName},用户爱好是：${record.interest}`
        // })
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }

    handleDelete = () => {
        let rows = this.state.selectedCheckRows;
        let ids = [];
        rows.map(item => {
            ids.push(item.id)
        })
        Modal.confirm({
            title: `你确定要删除${ids}吗`,
            onOk: () => {
                message.success('删除成功');
                this.request()
                this.setState({
                    selectedCheckRowKeys: [],
                    selectedCheckRows: null
                })
            },
            onCancel: () => {
                message.info('已取消')
            }
        })

    }

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
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
                title: '爱好',
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': '游泳',
                        '2': '爬山',
                        '3': '跑步',
                        '4': '唱歌',
                        '5': '敲代码',
                        '6': '看剧',
                        '7': '写作',

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
        const { selectedRowKeys } = this.state;
        const { selectedCheckRowKeys } = this.state;
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }
        const rowSelectionCheckbox = {
            type: 'checkbox',
            selectedRowKeys: selectedCheckRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                let ids = [];
                selectedRows.map(item => {
                    ids.push(item.id)
                })
                this.setState({
                    selectedCheckRowKeys: selectedRowKeys,
                    selectedCheckRows: selectedRows
                })
            }
        }
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock-动态数据渲染表格" style={{ marginTop: 10 }}>
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />

                </Card>
                <Card title="Mock-单选" style={{ marginTop: 10 }}>
                    <Table
                        columns={columns}
                        rowSelection={rowSelection}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onRow={
                            (record, index) => {
                                return {
                                    onClick: () => {
                                        this.onRowClick(record, index)
                                    }
                                }
                            }
                        }
                    />

                </Card>

                <Card title="Mock-分页" style={{ marginTop: 10 }}>
                    <Table
                        columns={columns}
                        rowSelection={rowSelectionCheckbox}
                        dataSource={this.state.dataSource}
                        pagination={this.state.pagination}
                    />

                </Card>
            </div>
        )
    }
}
