import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import LeftMenu from '../../containers/LeftMenu';
import List from './List';
import Detail from './Detail';

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
                    <Switch>
                        <Route exact={true} path='/news/list' component={List} />
                        <Route exact={true} path='/news/:id' component={Detail} />
                    </Switch>
                </Col>
            </Row>
        </Container>
    );
};

export default News;
