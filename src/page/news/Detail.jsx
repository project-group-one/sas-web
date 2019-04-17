import React from 'react';
import { Divider } from 'antd';
import styled from 'styled-components';
import Comments from '../../components/Comments';

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
    title: '放假啊接口飞机上看',
    content: '123123123',
    author: 'string',
    imgUrl: 'string',
    keywords: 'string',
    source: 'string',
    storeUrl: 'string',
    summary: 'string',
    type: 0,
    releaseTime: '2019-08-12',
};

const Detail = ({ current = defaultCurrent }) => {
    return (
        <Container>
            <Divider style={{ height: 6, margin: '2px 0', background: 'rgb(245,185,0)' }} />
            <Title>{current.title}</Title>
            <Meta>
                <Time>{current.releaseTime}</Time>作者：<Author>{current.author}</Author>
            </Meta>
            <Content>{current.content}</Content>
            <Comments />
        </Container>
    );
};

export default Detail;
