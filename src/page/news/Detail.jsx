import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Divider, Input, Button } from "antd";
import styled from "styled-components";
import Comments from "../../components/Comments";

const Title = styled.h1`
  color: #105274;
  text-align: center;
  margin-bottom: 10px;
`;
const Content = styled.pre`
  min-height: 300px;
`;
const Container = styled.main``;
const Meta = styled.main`
  text-align: center;
  margin-bottom: 10px;
`;
const Time = styled.span`
  margin-right: 10px;
`;
const Author = styled.span``;

const defaultCurrent = {
  id: 1,
  title: "放假啊接口飞机上看",
  content: "123123123",
  author: "string",
  imgUrl: "string",
  keywords: "string",
  source: "string",
  storeUrl: "string",
  summary: "string",
  type: 0,
  releaseTime: "2019-08-12"
};

@inject("newsStore", "userStore")
@observer
class Detail extends Component {
  state = {
    content: ""
  };

  handleClick = () => {
    const { content } = this.state;
    const { id } = this.props.newsStore.detail;
    const { user } = this.props.userStore;

    if (!user) return;

    const { id: userId, username } = user;

    this.props.newsStore.post(content, id, userId, username);
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.newsStore.getNews(id);
  }

  render() {
    const { newsStore, userStore } = this.props;
    const { detail: current } = newsStore;
    const { user } = userStore;

    return (
      <Container>
        <Divider
          style={{ height: 6, margin: "2px 0", background: "rgb(245,185,0)" }}
        />
        <Title>{current.title}</Title>
        <Meta>
          <Time>{current.releaseTime}</Time>作者：
          <Author>{current.author}</Author>
        </Meta>
        <Content dangerouslySetInnerHTML={{ __html: current.content }} />
        {current.comments &&
          current.comments.map(comment => {
            return <Comments key={comment.id.toString()} data={comment} />;
          })}
        {user ? (
          <div style={{ width: 500, margin: "0 auto", textAlign: "right" }}>
            <Input.TextArea
              value={this.state.content}
              onChange={e => this.setState({ content: e.target.value })}
            />
            <Button
              style={{ marginTop: 5 }}
              type="primary"
              onClick={this.handleClick}
            >
              提交
            </Button>
          </div>
        ) : null}
      </Container>
    );
  }
}

export default Detail;
