import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import useStores from '~/hooks/useStores'
import { List } from 'antd'
import NewsBanner from './newsBanner'
import moment from 'moment'

const News = () => {
    const { newsStore } = useStores()
    const renderExtra = time => {
        return (
            <div>
                <p>{moment(time).format('YYYY-MM-DD')}</p>
                <Link to="/news/list">more</Link>
            </div>
        )
    }
    const getContent = (content, l) => {
        return content && content.length > l ? content.slice(0, l - 1) + '...' : content
    }

    useEffect(() => {
        newsStore.getNewsList()
    }, [])

    return (
        <div>
            <div className="home-news-header">
                <span>新闻资讯 FOCUS NEWS</span>
                <Link to="/news/list">MORE ></Link>
            </div>
            <div className="home-news-content">
                <div className="home-news-content-left">
                    <NewsBanner />
                </div>
                <div className="home-news-content-right">
                    <List
                        className="home-news-list"
                        itemLayout="vertical"
                        dataSource={newsStore.data}
                        renderItem={item => (
                            <List.Item extra={renderExtra(item.releaseTime)}>
                                <List.Item.Meta
                                    title={<Link to={`/news/${item.id}`}>{item.title}</Link>}
                                />
                                {getContent(item.content, 70)}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

export default observer(News)
