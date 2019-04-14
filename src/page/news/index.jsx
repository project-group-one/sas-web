import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import LeftMenu from '../../containers/LeftMenu';
import List from './List';

const Container = styled.main`
    padding: 0 50px;
`;
const News = () => {
    return (
        <Container>
            <Row gutter={20}>
                <Col span={5}>
                    <LeftMenu />
                </Col>
                <Col span={19}>
                    <List />
                </Col>
            </Row>
        </Container>
    );
};

export default News;
