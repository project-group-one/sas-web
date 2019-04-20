import React, { Component, Fragment } from 'react'
import { observer, inject } from 'mobx-react'
import { List, Divider, Pagination } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 1.5em;
    color: #105274;
`

@inject('newsStore')
@observer
class ListPagination extends Component {
    componentDidMount() {
        this.props.newsStore.getNewsList()
    }

    render() {
        const {
            newsStore: { data, queryParams }
        } = this.props
        const { current, pageSize } = queryParams
        const paginationProps = {
            current,
            pageSize
        }

        return (
            <Fragment>
                <Divider style={{ height: 6, margin: '2px 0', background: 'rgb(245,185,0)' }} />
                <List
                    header={<Title>新闻资讯</Title>}
                    footer={<Pagination {...paginationProps} />}
                    dataSource={data.slice()}
                    renderItem={item => (
                        <List.Item actions={[item.createdAt]}>
                            <List.Item.Meta
                                title={<Link to={`/news/${item.id}`}>{item.title}</Link>}
                            />
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }
}

export default ListPagination
