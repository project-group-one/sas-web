import Request from '~/util/request'

export function query(params) {
    return Request.get('/api/news', { params }).then(({ error, data: { data, pagination } }) => {
        return {
            data: !error && Array.isArray(data) ? data : [],
            pagination: !error ? pagination : {}
        }
    })
}

export function find(id) {
    return Request.get(`/api/news/${id}`).then(({data, error}) => error ? {} : data.data)
}

export function postComment({ content, newsId, userId, userName }) {
    return Request.post('/api/news/comments', { content, newsId, userId, userName }).then(({data, error}) => error)
}
