import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Button } from 'antd'
import Search from '~/components/Search'

@inject('authorityStore')
@observer
class MainLayout extends Component {
    componentDidMount() {
        // this.props.authorityStore.getUser()
    }

    render() {
        const { authorityStore } = this.props
        const { user } = authorityStore

        return (
            <div className="home-header">
                <div className="w">
                    <img src="/asset/img/title.jpg" alt="title" />

                    {user.id ? (
                        <span>{user.name}</span>
                    ) : (
                        <Button onClick={() => this.props.authorityStore.showLogin()}>登录</Button>
                    )}

                    <Search className="home-search" />
                </div>
            </div>
        )
    }
}

export default MainLayout
