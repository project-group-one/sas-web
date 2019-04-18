import React, { Fragment } from 'react';
import { List, Divider, Pagination } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    color: #105274;
`;

const ListPagination = () => {
    return (
        <Fragment>
            <Divider style={{ height: 6, margin: '2px 0', background: 'rgb(245,185,0)' }} />
            <List
                header={<Title>新闻资讯</Title>}
                footer={<Pagination />}
                dataSource={[{ id: 1, title: '13', content: 'content', createdAt: '2019-02-12' }]}
                renderItem={(item) => (
                    <List.Item actions={[item.createdAt]}>
                        <List.Item.Meta title={<Link to={`/news/${item.id}`}>{item.title}</Link>} />
                    </List.Item>
                )}
            />
        </Fragment>
    );
};

export default ListPagination;
