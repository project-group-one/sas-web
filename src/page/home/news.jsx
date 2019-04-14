import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';
import NewsBanner from './newsBanner';

const data = [];
for (let i = 0; i < 4; i++) {
    data.push({
        id: `new${i}`,
        title: '我校国际科研合作项目取得突破我校国际科研合作项目取得突破我校国际科研合作项目取得突破',
        content: '近日，浙江省科技厅公布“2019年度‘一带一路’国际科技合作项目、2018年度国际产业联合研发计划项目以及2018年度企业设立海外研发机构（中心）”名奥术大师所大大所多撒大所',
        time: '2018-12-12',
    });
}

const News = () => {
    const renderExtra = (time) => {
        return (
            <div>
                <p>{time}</p>
                <Link to='/news'>more</Link>
            </div>
        );
    };
    const getContent = (content, l) => {
        return content.length > l ? content.slice(0, l - 1) + '...' : content;
    };
    return (
        <div>
            <div className='home-news-header'>
                <span>新闻资讯 FOCUS NEWS</span>
                <Link to='/news'>MORE ></Link>
            </div>
            <div className='home-news-content'>
                <div className='home-news-content-left'>
                    <NewsBanner />
                </div>
                <div className='home-news-content-right'>
                    <List
                        className='home-news-list'
                        itemLayout='vertical'
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item key={item.title} extra={renderExtra(item.time)}>
                                <List.Item.Meta title={item.title} />
                                {getContent(item.content, 70)}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default News;
