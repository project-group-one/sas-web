import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import Search from '~/components/Search'

@inject('authorityStore', 'userStore')
@observer
class MainLayout extends Component {
    componentDidMount() {
        // this.props.authorityStore.getUser()
        let user = window.localStorage.getItem('user')

        user = user ? JSON.parse(user) : null

        this.props.userStore.setUser(user)
    }

    render() {
        const { authorityStore, userStore } = this.props
        const { user } = userStore

        return (
            <div className="home-header">
                <div className="w">
                    <Link to="/">
                        <img src="/asset/img/title.jpg" alt="title" />
                    </Link>

                    {user ? (
                        <span>{user.name}</span>
                    ) : (
                        <Button onClick={() => authorityStore.showLogin()}>登录</Button>
                    )}

                    <Search className="home-search" />
                </div>
            </div>
        )
    }
}

export default MainLayout
