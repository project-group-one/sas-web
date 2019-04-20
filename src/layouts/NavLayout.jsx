import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import LeftMenu from '../components/LeftMenu';
import NewsList from '../page/news/List';
import NewsDetail from '../page/news/Detail';
import ReportList from '../page/report/List';
import UserDetail from '../page/user/Detail';
import Password from '../page/user/Password';

const Container = styled.main`
    width: 1100px;
    margin: 0 auto;
`;
const News = () => {
    return (
        <Container>
            <Row gutter={40}>
                <Col span={6}>
                    <LeftMenu />
                </Col>
                <Col span={18}>
                    <Switch>
                        <Route exact={true} path='/news/list' component={NewsList} />
                        <Route exact={true} path='/news/:id' component={NewsDetail} />
                        <Route exact={true} path='/user/detail' component={UserDetail} />
                        <Route exact={true} path='/user/password' component={Password} />
                        <Route exact={true} path='/report/list' component={ReportList} />
                    </Switch>
                </Col>
            </Row>
        </Container>
    );
};

export default News;
