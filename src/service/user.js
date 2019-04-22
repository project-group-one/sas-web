import Request from '~/util/request'

// 获取当前登录用户
export function find() {
    return Request.get('/api/user/current').then(res => res)
}

export function update(data, id) {
    return Request.put(`/api/user?mId=${id}&id=${id}`, data).then(res => console.log(res))
}

export function updatePassword({ oPwd, nPwd }) {
    return Request.put('/api/user/pwd', { oPwd, nPwd }).then(res => console.log(res))
}
