import React from 'react'
import { Card, Button, Form, Input, message, Checkbox } from 'antd'

class FormLogin extends React.Component {
    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`${userInfo.userName} 恭喜你，你通过本次表单学习，你的密码是${userInfo.passWord}`)
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <Form.Item>
                            <Input placeholder="请输入用户名" />
                        </Form.Item>
                        <Form.Item>
                            <Input.Password placeholder="请输入密码" />
                        </Form.Item>
                        <Button type="primary">登录</Button>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{ marginTop: 10 }}>
                    <Form style={{ width: 300 }}>
                        <Form.Item>
                            {
                                getFieldDecorator('userName', {
                                    // initialValue: 'Jack',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        }, {
                                            min: 5, max: 10,
                                            message: '长度不在范围内'
                                        }, {
                                            pattern: /^[0-9a-zA-Z]{5,10}$/,
                                            message: '用户名必须是数字或字母'
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入用户名" />
                                )}
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('passWord', {
                                    // initialValue: '123',
                                    rules: []
                                }
                                )(
                                    <Input.Password placeholder="请输入密码" />
                                )}
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('checkbox',{
                                    valuePropName:'checked',
                                    initialValue:true
                                }
                                )(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a>忘记密码</a>
                        </Form.Item>
                        <Button type="primary" onClick={this.handleSubmit}>登录</Button>

                    </Form>
                </Card>
            </div>)
    }
}
export default Form.create()(FormLogin)