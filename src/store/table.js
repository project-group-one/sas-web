import { observable, action } from 'mobx';

class Table {
  // 数据
  @observable data = [];
  // 加载状态
  @observable loading = false;
  // 筛选条件
  @observable conditions = {
    pagination: {
      current: 1,
      pageSize: 10
    },
    filters: {},
    sorter: {}
  };

  @action
  setData(data = []) {
    this.data = data;
  }

  @action
  setLoading(bool = false) {
    this.loading = bool;
  }

  @action
  setConditions(conditions = {}) {
    this.conditions = conditions;
  }
}

export default Table
