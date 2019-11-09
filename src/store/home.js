import { observable, action } from "mobx";
import { query as queryPicture } from "~/service/picture";

class Home {
  @observable banners = [];

  @action
  async getBanners(params = {}) {
    const { data } = await queryPicture({
      current: 1,
      pageSize: 5,
      ...params
    });
    this.banners = data;
  }
}

export default Home;
