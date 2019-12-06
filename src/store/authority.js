import { observable, action, runInAction } from "mobx";
import { message } from "antd";
import { login, register } from "~/service/authority";
import { getStore } from "~/store";

class Authority {
  @observable loginVisible = false;
  @observable registerVisible = false;

  @action
  showLogin() {
    this.loginVisible = true;
  }

  @action
  hideLogin() {
    this.loginVisible = false;
  }

  @action
  showRegister() {
    this.registerVisible = true;
  }

  @action
  hideRegister() {
    this.registerVisible = false;
  }

  @action
  async login(params) {
    const { errorMsg, accessToken, userId, expired } = await login(params);

    if (errorMsg) {
      message.error(errorMsg);
      return;
    }

    if (accessToken) {
      window.localStorage.setItem("userId", userId);
      window.localStorage.setItem("accessToken", accessToken);
      window.localStorage.setItem("expired", expired);

      message.success("登录成功", 2);
      this.loginVisible = false;

      runInAction(() => {
        const userStore = getStore("userStore");
        userStore.getUser();
      });
    }
  }

  @action
  async logout() {
    const userStore = getStore("userStore");
    userStore.setUser(null);

    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("userId");
    window.localStorage.removeItem("expired");
  }

  @action
  async register(params) {
    const { success, msg, data } = await register(params);

    if (!success) {
      message.error(msg);
      return;
    }

    runInAction(() => {
      message.success('注册成功')
      this.registerVisible = false;
      window.localStorage.setItem("accessToken", data.accessToken);
      window.localStorage.setItem("expired", data.expired);
      const userStore = getStore("userStore");
      userStore.getUser();
    });
  }
}

export default Authority;
