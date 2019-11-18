import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Modal, Form, Input, Button, Icon } from "antd";
import VerifyCode from "~/components/VerifyCode";

@inject("authorityStore")
@Form.create()
@observer
class Register extends Component {
  state = {
    pwdStatus: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.password !== values.confirm) {
          this.setState({ pwdStatus: "error" });
          return;
        } else {
          this.setState({ pwdStatus: "" });
        }

        this.props.authorityStore.register(values);
      }
    });
  };

  render() {
    const { form, authorityStore } = this.props;
    const { pwdStatus } = this.state;
    const { getFieldDecorator } = form;

    return (
      <Modal
        title="注册"
        visible={authorityStore.registerVisible}
        width={340}
        footer={null}
        maskClosable={false}
        onCancel={() => authorityStore.hideRegister()}
      >
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [{ required: true, message: "请输入用户名!" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="用户名"
              />
            )}
          </Form.Item>
          <Form.Item
            validateStatus={pwdStatus}
            help={pwdStatus === "error" ? "两次密码不一致!" : ""}
          >
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "请输入密码!" }]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="密码"
              />
            )}
          </Form.Item>
          <Form.Item
            validateStatus={pwdStatus}
            help={pwdStatus === "error" ? "两次密码不一致!" : ""}
          >
            {getFieldDecorator("confirm", {
              rules: [{ required: true, message: "请输入密码!" }]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="确认密码"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "请输入姓名!" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="姓名"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("phone", {
              rules: [
                {
                  required: true,
                  message: "请输入手机号"
                },
                {
                  pattern: /^\d{11}$/,
                  message: "手机号格式不正确"
                }
              ]
            })(<Input placeholder="请输入手机号" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("code", {
              rules: [
                {
                  required: true,
                  message: "请输入验证码"
                }
              ]
            })(
              <VerifyCode
                placeholder="请输入验证码"
                phone={form.getFieldValue("phone")}
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              注册
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Register;
