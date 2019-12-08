import { observable, action, runInAction } from "mobx";
import { message } from "antd";
import { query, find, create } from "~/service/report";

class Report {
  @observable data = [];
  @observable total = 0;
  @observable queryParams = {
    current: 1,
    pageSize: 10
  };

  @observable detail = {};

  @action
  async getReportList(params = {}) {
    this.queryParams = { ...this.queryParams, ...params };

    const { data = [], pagination: { total } = {} } = await query(this.queryParams);

    this.data = data;
    this.total = total;
  }

  @action
  async getReport(id) {
    const data = await find(id);

    this.detail = data;
  }

  @action
  async createReport(params) {
    const error = await create(params);

    if (error) {
      message.error("上传失败");
      return;
    }

    runInAction(() => {
      message.success("上传成功");
      this.getReportList();
    });
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

export default Report;
