import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Card, Form, Input, Button } from "antd";
import UploadImage from "~/components/UploadImage";

@inject("userStore")
@Form.create()
@observer
class Organization extends Component {
  componentDidMount() {
    this.props.userStore.getOrganization();
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.userStore.submitOrganizationInfo(values);
        // const { user } = this.props.userStore;
        // this.props.userStore.updateUser(values, user.id);
      }
    });
  };
  render() {
    const { organization, user } = this.props.userStore;
    const { getFieldDecorator } = this.props.form;
    return (
      <Card size="small" title={organization.id ? "组织信息" : "申请组织"}>
        {organization.id ? (
          "组织信息"
        ) : (
          <Form onSubmit={this.handleSubmit}>
            <Form.Item label="组织名称" required>
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "请输入组织名称"
                  }
                ]
              })(<Input style={{ width: 300 }} placeholder="请输入组织名称" />)}
            </Form.Item>
            <Form.Item label={"组织证件"} required>
              {getFieldDecorator("credential", {
                rules: [
                  {
                    required: true,
                    message: "请上传组织相关证件"
                  }
                ],
                initialValue: user.originationCertificatePicture
              })(<UploadImage />)}
            </Form.Item>
            <Button htmlType="submit" type="primary">
              提交
            </Button>
          </Form>
        )}
      </Card>
    );
  }
}

export default observer(Organization);
