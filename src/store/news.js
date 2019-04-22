import { observable, action, runInAction } from 'mobx'
import { query, find, postComment } from '~/service/news'

class News {
    @observable data = []
    @observable total = 0
    @observable queryParams = {
        current: 1,
        pageSize: 10
    }

    @observable detail = {}

    @action
    async getNewsList(params = {}) {
        this.queryParams = { ...this.queryParams, ...params }

        const {
            data,
            pagination: { total }
        } = await query(this.queryParams)

        this.data = data
        this.total = total
    }

    @action
    async getNews(id) {
        const data = await find(id)

        this.detail = data
    }

    @action
    async post(content, newsId, userId, userName) {
        await postComment({ content, newsId, userId, userName })

        runInAction(() => {
            this.getNews(newsId)
        })
    }
}

export default News
