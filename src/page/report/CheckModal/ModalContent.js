import React from "react";
import { inject, observer } from "mobx-react";
import { Form } from "antd";
import moment from "moment";
import styled from "styled-components";

const Container = styled.h1`
  padding: 40px;
`;

const Title = styled.h1`
  color: #62a4f1;
  font-size: 20px;
`;

const Content = styled.div`
  color: #000;
  font-size: 14px;
`;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
};

@inject("reportStore")
@observer
class ModalContent extends React.PureComponent {
  render() {
    const { detail } = this.props.reportStore;
    
    return (
      <Container>
        <Title>检测结果:</Title>
        <Content>
          <Form {...formItemLayout}>
            <Form.Item label="名称">{detail.name}</Form.Item>
            <Form.Item label="检测结果">{detail.examiningResult}</Form.Item>
            <Form.Item label="创建时间">
              {moment(detail.createdData).format("YYYY-MM-DD HH:mm")}
            </Form.Item>
            <Form.Item label="图片">
              <img src={`${detail.path}`} alt="图片" />
            </Form.Item>
            <Form.Item label="评价">{detail.evaluation || "暂无"}</Form.Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default ModalContent;
