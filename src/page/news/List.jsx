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
    renderExtra = time => {
        return (
            <div>
                <p>{time}</p>
            </div>
        )
    }

    componentDidMount() {
        this.props.newsStore.getNewsList()
    }

    render() {
        const {
            newsStore: { data, queryParams, total }
        } = this.props
        const { current, pageSize } = queryParams
        const paginationProps = {
            current,
            pageSize,
            total
        }

        return (
            <Fragment>
                <Divider style={{ height: 6, margin: '2px 0', background: 'rgb(245,185,0)' }} />
                <List
                    className="home-news-list"
                    header={<Title>新闻资讯</Title>}
                    footer={<Pagination {...paginationProps} />}
                    dataSource={data.slice()}
                    renderItem={item => (
                        <List.Item actions={[item.releaseTime]}>
                            <List.Item.Meta
                                title={<Link to={`/news/${item.id}`}>{item.title}</Link>}
                                description={
                                    item.content
                                        ? item.content.slice(0, 100) + '...'
                                        : '党的十九大报告指出，中国特色社会主义进入了新时代，这是全党上下推进各项事业必须准确把握的新的历史方位，也是指...'
                                }
                            />
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }
}

export default ListPagination
