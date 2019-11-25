import { observable, action, runInAction } from 'mobx'
import { query, find } from '~/service/report'

class Report {
    @observable data = []
    @observable total = 0
    @observable queryParams = {
        current: 1,
        pageSize: 10
    }

    @observable detail = {}

    @action
    async getReportList(params = {}) {
        this.queryParams = { ...this.queryParams, ...params }

        const {
            data,
            pagination: { total }
        } = await query(this.queryParams)

        this.data = data
        this.total = total
    }

    @action
    async getReport(id) {
        const data = await find(id)

        this.detail = data
    }

    // @action
    // async post(content, newsId, userId, userName) {
    //     const error = await postComment({ content, newsId, userId, userName })

    //     if (error) return

    //     runInAction(() => {
    //         this.getNews(newsId)
    //     })
    // }
}

export default Report
