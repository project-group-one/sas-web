import React from 'react';
import styled from 'styled-components';
import Comments from '../../components/Comments';

const Content = styled.pre``;
const Title = styled.h1`
    color: #105274;
    text-align: center;
`;
const Container = styled.main``;
const Meta = styled.main``;

const defaultCurrent = {
    id: 1,
    title: '放假啊接口飞机上看',
    content: '123123123',
};

const Detail = ({ current = defaultCurrent }) => {
    return (
        <Container>
            <Title>{current.title}</Title>
            <Meta />
            <Content>{current.content}</Content>
            <Comments />
        </Container>
    );
};

export default Detail;
