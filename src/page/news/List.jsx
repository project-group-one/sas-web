import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";
import { List, Divider, Pagination, Input } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import getDate from "~/util/getDate";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Extra = styled.div``;

const Title = styled.h1`
  font-size: 1.5em;
  color: #105274;
`;

@inject("newsStore")
@observer
class ListPagination extends Component {
  handleSearch = value => {
    this.props.newsStore.getNewsList({ keywords: value });
  };

  renderExtra = time => {
    return (
      <div>
        <p>{time}</p>
      </div>
    );
  };

  componentDidMount() {
    this.props.newsStore.getNewsList();
  }

  render() {
    const {
      newsStore: { data, queryParams, total }
    } = this.props;
    const { current, pageSize } = queryParams;
    const paginationProps = {
      current,
      pageSize,
      total
    };

    return (
      <Fragment>
        <Divider
          style={{ height: 6, margin: "2px 0", background: "rgb(245,185,0)" }}
        />
        <List
          className="home-news-list"
          header={
            <Header>
              <Title>新闻资讯</Title>
              <Extra>
                <Input.Search
                  style={{ width: 180 }}
                  placeholder="输入关键字"
                  onSearch={value => this.handleSearch(value)}
                />
              </Extra>
            </Header>
          }
          footer={<Pagination {...paginationProps} />}
          dataSource={data.slice()}
          renderItem={item => (
            <List.Item actions={[getDate(item.releaseTime)]}>
              <List.Item.Meta
                title={<Link to={`/news/${item.id}`}>{item.title}</Link>}
                description={
                  item.content && item.content.length > 100
                    ? item.content.slice(0, 100) + "..."
                    : item.content
                }
              />
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

export default ListPagination;
