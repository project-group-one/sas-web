import { observable, action, runInAction } from 'mobx'
import { message } from 'antd'
import { login } from '~/service/authority'
import { getStore } from '~/store'

class Authority {
    @observable loginVisible = false
    @observable user = null
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
                const userStore = getStore('userStore')
                userStore.getUser()
            })
        }
    }

    @action
    async logout() {
        const userStore = getStore('userStore')
        userStore.setUser(null)
    }
}

export default Authority
