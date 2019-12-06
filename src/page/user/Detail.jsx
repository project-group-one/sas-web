import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";
import { Form, Input, Upload, Select, Button, Card } from "antd";
import styled from "styled-components";
import UploadImage from "~/components/UploadImage";
// import { getTimeDistance } from '@/utils/utils';

const FormItem = Form.Item;
const { Option } = Select;

const AvatarTitle = styled.div`
  height: 22px;
  font-size: 12px;
  line-height: 22px;
  margin-bottom: 8px;
`;

const Avatar = styled.div`
  width: 144px;
  height: 144px;
  margin-bottom: 12px;
  overflow: hidden;
`;

const AvatarUploadButton = styled.div`
  width: 144px;
  text-align: center;
`;

const Right = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 448px;
  margin-left: 150px;
`;

const Left = styled.div`
  max-width: 448px;
  min-width: 280px;
`;

// 头像组件 方便以后独立，增加裁剪之类的功能
const AvatarView = ({ avatar }) => (
  <Fragment>
    <AvatarTitle>头像</AvatarTitle>
    <Avatar>
      <img style={{ width: "100%" }} src={avatar} alt="avatar" />
    </Avatar>
    <Upload fileList={[]}>
      <AvatarUploadButton>
        <Button icon="upload">更换头像</Button>
      </AvatarUploadButton>
    </Upload>
  </Fragment>
);

const validatorPhone = (rule, value, callback) => {
  const values = value.split("-");
  if (!values[0]) {
    callback("Please input your area code!");
  }
  if (!values[1]) {
    callback("Please input your phone number!");
  }
  callback();
};

@inject("userStore")
@Form.create()
@observer
class Detail extends Component {
  componentDidMount() {
    this.props.userStore.getUser()
    // this.setBaseInfo();
  }

  setBaseInfo = () => {
    const { currentUser, form } = this.props;
    Object.keys(form.getFieldsValue()).forEach(key => {
      const obj = {};
      obj[key] = currentUser[key] || null;
      form.setFieldsValue(obj);
    });
  };

  getAvatarURL() {
    const { currentUser } = this.props;
    if (currentUser.avatar) {
      return currentUser.avatar;
    }
    const url =
      "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png";
    return url;
  }

  getViewDom = ref => {
    this.view = ref;
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { user } = this.props.userStore;
        this.props.userStore.updateUser(values, user.id);
      }
    });
  };

  render() {
    const {
      form: { getFieldDecorator },
      userStore
    } = this.props;
    const { user } = userStore;

    if (!user) return null;

    return (
      <Card size="small" title="基本设置">
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
              <FormItem label={"邮箱"}>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      required: true,
                      message: "请输入邮箱"
                    }
                  ],
                  initialValue: user.email
                })(<Input />)}
              </FormItem>
              <FormItem label={"昵称"}>
                {getFieldDecorator("name", {
                  rules: [
                    {
                      required: true,
                      message: "请输入昵称"
                    }
                  ],
                  initialValue: user.name
                })(<Input />)}
              </FormItem>
              <FormItem label={"手机号码"}>
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      required: true,
                      message: "请输入手机号码"
                    }
                    // { validator: validatorPhone }
                  ],
                  initialValue: user.phone
                })(<Input />)}
              </FormItem>
              <FormItem label={"地址"}>
                {getFieldDecorator("address", {
                  rules: [
                    {
                      required: true,
                      message: "请输入详细地址"
                    }
                  ],
                  initialValue: user.address
                })(<Input />)}
              </FormItem>
              <FormItem label={"身份证"}>
                {getFieldDecorator("idCardPicture", {
                  rules: [
                    {
                      required: true,
                      message: "请上传身份证"
                    }
                  ],
                  initialValue: user.idCardPicture
                })(<UploadImage />)}
              </FormItem>
              <FormItem label={"组织证件"}>
                {getFieldDecorator("originationCertificatePicture", {
                  rules: [
                    {
                      required: true,
                      message: "请上传组织相关证件"
                    }
                  ],
                  initialValue: user.originationCertificatePicture
                })(<UploadImage />)}
              </FormItem>
              <Button htmlType="submit" type="primary">
                保存
              </Button>
            </Form>
          </Left>
          {/* <Right>
            <AvatarView avatar={this.getAvatarURL()} />
          </Right> */}
        </div>
      </Card>
    );
  }
}

Detail.defaultProps = {
  currentUser: {}
};

export default Detail;
