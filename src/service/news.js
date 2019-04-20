import Request from '~/util/request'

export function query(params) {
    return Request.get('/api/news', { params }).then(({ data, pagination }) => {
        return {
            data: Array.isArray(data) ? data : [],
            pagination: pagination || {}
        }
    })
}

export function find(id) {
    return Request.get(`/api/news/${id}`).then(res => res.data)
}

export function postComment({ content, newsId, userId, username }) {
    return Request.post('/api/news/comments', { content, newsId, userId, username }).then(res =>
        console.log(res)
    )
}
