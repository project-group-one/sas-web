import { observable, action, runInAction } from "mobx";
import { message } from "antd";
import {
  find,
  update,
  updatePassword,
  fetchVerifyCode,
  verify,
  fetchOrganization,
  applyOrganization
} from "~/service/user";

class User {
  @observable user = JSON.parse(window.localStorage.getItem("user") || null);

  @observable organization = {};

  @action
  async getUser() {
    const user = await find();

    this.user = user;

    window.localStorage.setItem("user", JSON.stringify(user));
  }

  @action
  setUser(user) {
    this.user = user;

    if (user) {
      window.localStorage.setItem("user", JSON.stringify(user));
    } else {
      window.localStorage.removeItem("user");
    }
  }

  @action
  async updateUser(data, id) {
    const res = await update(data, id);
  }

  @action
  async updatePwd({ oPwd, nPwd }) {
    const {success, msg} = await updatePassword({ oPwd, nPwd });

    if (!success) {
      message.error(msg)
    } else {
      message.success('修改成功')
    }
  }

  @action
  async verify({ frontPath, backPath }) {
    const res = await verify({ frontPath, backPath });
    await this.getUser();
  }

  @action
  async getVerifyCode(phone) {
    const error = await fetchVerifyCode(phone);
    return new Promise(resolve => resolve({ error }));
  }

  @action
  async getOrganization() {
    const res = await fetchOrganization(this.user.id);

    this.organization = res;
  }

  @action
  async submitOrganizationInfo(params) {
    const error = await applyOrganization(params);

    if (!error) {
      runInAction(() => {
        message.success("申请成功");
        this.getOrganization();
      });
    }
  }
}

export default User;
