import React, { Component } from 'react'
import Banner from './banner'
import Nav from './nav'
import News from './news'
import HomeLink from './link'
import Search from './search'

class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <div className="home-header">
                    <div className="w">
                        <img src="/asset/img/title.jpg" alt="title" />
                        <Search className="home-search" />
                    </div>
                </div>
                <div className="home-banner">
                    <div className="w">
                        <Banner />
                    </div>
                </div>
                <div className="home-nav m-b-20">
                    <div className="w">
                        <Nav />
                    </div>
                </div>
                <div className="home-news m-b-50">
                    <div className="w">
                        <News />
                    </div>
                </div>
                <div className="home-link m-b-100">
                    <div className="w">
                        <HomeLink />
                    </div>
                </div>
                <div className="home-bottom">
                    <div className="w">
                        浙江省食品药品监督管理局稽查局版权所有 © Copyright 2018 ZUST All Rights
                        Reserved
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
