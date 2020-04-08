import React from 'react'
import { Button, Checkbox, Card, Input, Radio, Switch, Select, DatePicker, TimePicker, Upload, Icon, message, Form, InputNumber } from 'antd'
import moment from 'moment'

class FormRegister extends React.Component {
    state = {

    }
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                userImg: imageUrl,
                loading: false,
            }));
        }
    }

    render() {
        const FormItem = Form.Item;
        const RadioGroup = Radio.Group;
        const TextArea = Input.TextArea;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                            {getFieldDecorator('username', {
                                rules: [{ required: true }]
                            })(
                                <Input placeholder="请输入用户名" />
                            )}
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {getFieldDecorator('password',
                                {
                                    rules: [{ required: true }]
                                })(
                                    <Input placeholder="请输入密码" />
                                )}
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {getFieldDecorator('sex', {
                                initialValue: "1",
                            })(
                                <RadioGroup>
                                    <Radio value="1">男</Radio>
                                    <Radio value="2">女</Radio>
                                </RadioGroup>)}
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {getFieldDecorator('age', {
                                initialValue: "18",
                            })(
                                <InputNumber />)}
                        </FormItem>
                        <FormItem label="职业" {...formItemLayout}>
                            {getFieldDecorator('state', {
                                initialValue: "3",
                            })(
                                <Select>
                                    <Option value="1">程序员</Option>
                                    <Option value="2">建筑师</Option>
                                    <Option value="3">创业者</Option>
                                    <Option value="4" >生意人</Option>
                                    <Option value="5">自由职业</Option>
                                </Select>)}
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {getFieldDecorator('favorite', {
                                initialValue: ["3", "5"],
                            })(
                                <Select mode="multiple">
                                    <Option value="1">游泳</Option>
                                    <Option value="2">踢足球</Option>
                                    <Option value="3">羽毛球</Option>
                                    <Option value="4" >爬山</Option>
                                    <Option value="5">骑行</Option>
                                    <Option value="6">桌球</Option>
                                    <Option value="7">羽毛球</Option>
                                    <Option value="8">美食</Option>
                                </Select>)}
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {getFieldDecorator('isMarried', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Switch />)}
                        </FormItem>
                        <FormItem label="出生日期" {...formItemLayout}>
                            {getFieldDecorator('birthday', {
                                initialValue: moment('2018-08-08 12:10:10')
                            })(
                                <DatePicker
                                    format='YYYY-MM-DD HH:mm:ss'
                                />)}
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {getFieldDecorator('address', {
                                initialValue: '北京市'
                            })(
                                <TextArea
                                    // autoSize={{
                                    //     minRows:3,
                                    //     maxRows:5
                                    // }}
                                />)}
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                            {getFieldDecorator('time', {

                            })(
                                <TimePicker />)}
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg', {
                                    valuePropName: 'fileList'
                                })(
                                    <Upload
                                        listType="picture-card"
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        onChange={this.handleChange}
                                    >
                                        {this.state.userImg ? <img src={this.state.userImg} /> : <Icon type="plus" />}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('userImg', {
                                    valuePropName: 'checked'
                                })(
                                    <Checkbox>我已阅读过<a href="#">慕课协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormRegister)