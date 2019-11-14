import Request from '~/util/request'

export function login(params) {
    return Request.post('/auth/token', params).then(res => {
        // 账户密码错误时，res为字符串
        return typeof res === 'string' ? { errorMsg: res } : res
    })
}
