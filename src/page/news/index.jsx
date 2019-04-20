import React from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import LeftMenu from '~/components/LeftMenu'
import List from './List'
import Detail from './Detail'

const Container = styled.main`
    padding: 0 50px;
`
const News = () => {
    return (
        <Container>
            <Switch>
                <Route exact={true} path="/news/list" component={List} />
                <Route exact={true} path="/news/:id" component={Detail} />
            </Switch>
        </Container>
    )
}

export default News
