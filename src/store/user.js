import { observable, action } from 'mobx'
import { find, update, updatePassword, fetchVerifyCode } from '~/service/user'

class User {
    @observable user = JSON.parse(window.localStorage.getItem('user') || null)

    @action
    async getUser() {
        const user = await find()
        console.log(user)

        this.user = user

        window.localStorage.setItem('user', JSON.stringify(user))
    }

    @action
    setUser(user) {
        this.user = user

        if (user) {
            window.localStorage.setItem('user', JSON.stringify(user))
        } else {
            window.localStorage.removeItem('user')
        }
    }

    @action
    async updateUser(data, id) {
        const res = await update(data, id)
    }

    @action
    async updatePwd({ oPwd, nPwd }) {
        const res = await updatePassword({ oPwd, nPwd })
    }

    @action
    async getVerifyCode(phone) {
        const error = await fetchVerifyCode(phone)
        return new Promise(resolve => resolve({ error }))
    }
}

export default User
