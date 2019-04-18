import { observable, action } from 'mobx'
import { query } from '~/service/news'

class News {
    @observable data = []
    @observable total = 0
    @observable queryParams = {
        current: 1,
        pageSize: 10
    }

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
}

export default News
