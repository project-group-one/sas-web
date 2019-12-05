import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Form, Button, Card } from "antd";
import styled from "styled-components";
import UploadImage from "~/components/UploadImage";

const FormItem = Form.Item;

const Left = styled.div`
  max-width: 448px;
  min-width: 280px;
`;

@inject("userStore")
@Form.create()
@observer
class Detail extends Component {
  getViewDom = ref => {
    this.view = ref;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { frontPath, backPath } = values;
        this.props.userStore.verify({ frontPath, backPath });
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator }
    } = this.props;
    return (
      <Card size="small" title="身份验证">
        <div
          style={{ display: "flex", padding: "0 50px" }}
          ref={this.getViewDom}
        >
          <Left>
            <Form
              layout="vertical"
              onSubmit={this.handleSubmit}
              hideRequiredMark
            >
              <FormItem label={"身份证正面"}>
                {getFieldDecorator("frontPath", {
                  rules: [
                    {
                      required: true,
                      message: "请上传身份证正面"
                    }
                  ]
                })(
                  <UploadImage
                    style={{
                      display: "block",
                      height: 200,
                      width: 500,
                      padding: 0
                    }}
                  />
                )}
              </FormItem>
              <FormItem label={"身份证反面"}>
                {getFieldDecorator("backPath", {
                  rules: [
                    {
                      required: true,
                      message: "请上传身份证反面"
                    }
                  ]
                })(
                  <UploadImage
                    style={{
                      display: "block",
                      height: 200,
                      width: 500,
                      padding: 0
                    }}
                  />
                )}
              </FormItem>
              <Button htmlType="submit" type="primary">
                保存
              </Button>
            </Form>
          </Left>
        </div>
      </Card>
    );
  }
}

Detail.defaultProps = {
  currentUser: {}
};

export default Detail;
