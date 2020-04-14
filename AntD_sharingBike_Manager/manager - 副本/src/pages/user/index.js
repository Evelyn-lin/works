import React from 'react'
import { Card, Button, Modal, Form, Input, Radio, Select, DatePicker, message } from 'antd';
import axios from '../../axios/index'
import Utils from '../../utils/utils'
import BaseForm from '../../components/BaseForm'
import Etable from '../../components/Etable'
import moment from 'moment'

const FormItem = Form.Item;
const RadioGrop = Radio.Group;
const TextArea = Input.TextArea;
const Option = Select.Option

export default class User extends React.Component {
    state = {
        
        isVisible: false,
        type: '',
        userInfo: {}
    }
    params = {
        page: 3
    }
    formList = [
        {
            type: 'INPUT',
            label: '用户名',
            field: 'user_name',
            placeholder: '请输入用户名称',
            width: 100,
        }, {
            type: 'INPUT',
            label: '手机号',
            field: 'user_mobile',
            placeholder: '请输入手机号',
            width: 100,
        }, {
            type: 'DATE',
            label: '请选择入职日期',
            field: 'user_date',
            placeholder: '请输入日期',
            width: 100,
        }
    ]

    componentDidMount() {
        this.requestList()
    }

    handleFilter = (params) => {
        this.params = params;
        this.requestList();
    }

    requestList = () => {
        axios.requestList(this, '/user/list', this.params, true)
    }

    handleOperate = (type) => {
        const item = this.state.selectedItem;
        if (type == 'create') {
            this.setState({
                type,
                isVisible: true,
                title: '创建员工'
            })
        } else if (type == 'edit') {
            if (!item) {
                message.warning('请选择一个员工')
                return
            }
            this.setState({
                type,
                isVisible: true,
                title: '编辑员工',
                userInfo: item
            })
        } else if (type == 'detail') {
            if (!item) {
                message.warning('请选择一个员工')
                return
            }
            this.setState({
                type,
                isVisible: true,
                title: '员工详情',
                userInfo: item
            })

        } else {
            if (!item) {
                message.warning('请选择一个员工')
                return
            }
            const _this = this;
            Modal.confirm({
                title: '确认删除',
                content: '是否要删除当前选中的员工？',
                onOk() {
                    axios.ajax({
                        url: '/user/delete',
                        data: {
                            params: {
                                id: item.id
                            }
                        },
                        isMock: true
                    }).then(res => {
                        if (res.code == 0) {
                            _this.setState({
                                isVisible: false
                            })
                            _this.requestList()
                        }
                    })
                }
            })

        }
    }

    handleSubmit = () => {
        let type = this.state.type;
        let data = this.userForm.props.form.getFieldsValue();
        console.log(data);

        axios.ajax({
            url: type == '/user/create' ? '/user/add' : '/user/edit',
            data: {
                params: data
            },
            isMock: true
        }).then(res => {
            if (res.code == 0) {
                this.setState({
                    isVisible: false,
                    selectedRowKeys: []
                })
                this.requestList();
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
                    return {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }[state]
                }
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(interest) {
                    return {
                        '1': '游泳',
                        '2': '爬山',
                        '3': '跑步',
                        '4': '唱歌',
                        '5': '敲代码',
                        '6': '跳舞',
                        '7': '画画',
                        '8': '读书',
                    }[interest]
                }
            },
            {
                title: '婚姻状态',
                dataIndex: 'isMarried',
                render(isMarried) {
                    return isMarried ? '已婚' : '未婚'
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '联系地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            },
        ]
        let footer = {};
        if (this.state.type == 'detail') {
            footer = { footer: null };
        }
        return (
            <div>
                <Card>
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilter} />
                </Card>
                <Card style={{ marginTop: 10 }} className="operate_wrap">
                    <Button type="primary" icon="plus" onClick={() => this.handleOperate('create')} >创建员工</Button>
                    <Button type="primary" icon="edit" onClick={() => this.handleOperate('edit')} >编辑员工</Button>
                    <Button type="primary" onClick={() => this.handleOperate('detail')} >员工详情</Button>
                    <Button type="primary" icon="delete" onClick={() => this.handleOperate('delete')} >删除员工</Button>
                </Card>
                <div className="content-wrap">
                    <Etable
                        updateSelectedItem={Utils.updateSelectedItem.bind(this)}
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                        selectedRowKeys={this.state.selectedRowKeys}
                        selectedIds={this.state.selectedIds}
                        selectedItem={this.state.selectedItem}
                    // rowSelection="checkbox"
                    />
                </div>
                <Modal
                    title={this.state.title}
                    visible={this.state.isVisible}
                    onOk={this.handleSubmit}
                    onCancel={() => {
                        this.setState({
                            isVisible: false
                        })
                    }}
                    width={600}
                    {...footer}
                >
                    <UserForm type={this.state.type} userInfo={this.state.userInfo} wrappedComponentRef={(inst) => { this.userForm = inst }} />
                </Modal>
            </div>
        )
    }
}

class UserForm extends React.Component {

    render() {
        let type = this.props.type;
        let userInfo = this.props.userInfo || {};
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 }
        }
        const { getFieldDecorator } = this.props.form;

        return (
            <Form layout="horizontal">
                <FormItem label="用户名" {...formItemLayout}>
                    {
                        type == 'detail' ? userInfo.username :
                            getFieldDecorator('user_name', {
                                initialValue: userInfo.username
                            })(
                                <Input type="text" placeholder="请输入用户名" />
                            )
                    }
                </FormItem>
                <FormItem label="性别" {...formItemLayout}>
                    {
                        type == 'detail' ? userInfo.sex == 1 ? '男' : '女' :
                            getFieldDecorator('sex', {
                                initialValue: userInfo.sex

                            })(
                                <RadioGrop>
                                    <Radio value={1}>男</Radio>
                                    <Radio value={2}>女</Radio>
                                </RadioGrop>
                            )
                    }
                </FormItem>
                <FormItem label="状态" {...formItemLayout}>
                    {
                        type == 'detail' ? {
                            '1': '咸鱼一条',
                            '2': '风华浪子',
                            '3': '北大才子',
                            '4': '百度FE',
                            '5': '创业者'
                        }[userInfo.state] :
                            getFieldDecorator('state', {
                                initialValue: userInfo.state

                            })(
                                <Select>
                                    <Option value={1}>咸鱼 </Option>
                                    <Option value={2}>咸鱼 </Option>
                                    <Option value={3}>咸鱼 </Option>
                                    <Option value={4}>咸鱼 </Option>
                                    <Option value={5}>咸鱼 </Option>
                                </Select>
                            )
                    }
                </FormItem>
                <FormItem label="生日" {...formItemLayout}>
                    {
                        type == 'detail' ? userInfo.birthday :
                            getFieldDecorator('birthday', {
                                initialValue: moment(userInfo.birthday)
                            })(
                                <DatePicker showTime format="YYYY-MM-DD hh:mm:ss" />
                            )
                    }
                </FormItem>
                <FormItem label="联系地址" {...formItemLayout}>
                    {
                        type == 'detail' ? userInfo.address :
                            getFieldDecorator('adress')(
                                <TextArea rows={3} placeholder="请输入联系地址" />
                            )
                    }
                </FormItem>
            </Form>
        )
    }
}

UserForm = Form.create()(UserForm)