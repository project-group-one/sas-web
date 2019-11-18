import Request from '~/util/request'

export function login(params) {
    return Request.post('/auth/token', params).then(({ data, error }) => {
        // 账户密码错误时，res为字符串
        return typeof data === 'string' ? { errorMsg: data } : data
    })
}

export function register(params) {
    return Request.post('/api/user/phone?code=' + params.code, params).then(({data, error}) => {
        // 错误信息时，res为字符串
        return typeof data === 'string' ? { errorMsg: data } : data
    })
}
