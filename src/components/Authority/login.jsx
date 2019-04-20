import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Modal, Form, Input, Button, Icon } from 'antd'

@inject('authorityStore')
@observer
class Login extends Component {
    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.authorityStore.login(values)
            }
        })
    }

    render() {
        const { form, authorityStore } = this.props
        const { getFieldDecorator } = form
        const { loginVisible } = authorityStore

        return (
            <Modal
                title="登录"
                visible={loginVisible}
                width={340}
                footer={null}
                maskClosable={false}
                onCancel={() => authorityStore.hideLogin()}
            >
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入用户名!' }]
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }]
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(Login)
