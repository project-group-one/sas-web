import Request from '~/util/request'

export function login(params) {
    return Request.post('/auth/token', params).then(res => res || {})
}
