import Request from '~/util/request'

export function login(params) {
    return Request.post('/auth/token', params).then(res => res)
}

// 获取当前登录用户
export function getUser() {
    return Request.get('/api/user/current').then(res => res)
}
