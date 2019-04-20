import { observable, action, runInAction } from 'mobx'
import Cookies from 'js-cookie'
import { message } from 'antd'
import { login, getUser } from '~/service/authority'

class Authority {
    @observable loginVisible = false
    @observable user = {}
    @observable auth = false

    @action
    showLogin() {
        this.loginVisible = true
    }

    @action
    hideLogin() {
        this.loginVisible = false
    }

    @action
    async login(params) {
        const { accessToken } = await login(params)

        if (accessToken) {
            message.success('登录成功', 2)
            this.loginVisible = false

            runInAction(() => {
                this.getUser()
            })
        }
    }

    @action
    async getUser() {
        const user = await getUser()

        this.user = user
    }
}

export default Authority
