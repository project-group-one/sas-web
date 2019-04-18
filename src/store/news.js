import { observable, action } from 'mobx'
import { query } from '~/serivce/news'

class News {
    @observable data = []
    @observable queryParams = {
        current: 1,
        pageSize: 10
    }

    @action
    async getNewsList(params = {}) {
        this.queryParams = { ...this.queryParams, ...params }

        const data = await query(this.queryParams)

        this.data = data
    }
}

export default News
