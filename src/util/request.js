import axios from "axios";
import { message } from "antd";
import { getStore } from "~/store";
import { rootPath } from "../constants";

function handleSuccess(response) {
  if (response.status >= 200 && response.status < 300) {
    return { data: response.data, error: false };
  }
}

function handleError(error) {
  const status = error.response ? error.response.status : undefined;
  switch (status) {
    case 400:
      message.error("非法请求");
      break;
    case 401:
    case 403:
      message.error("无权限");
      const authorityStore = getStore("authorityStore");
      authorityStore.showLogin();
      break;
    case 500:
    case 502:
    case 503:
    case 504:
      message.error("服务端错误");
      break;
    default:
      message.error(status);
  }
  return { data: {}, error: true };
}

function setTimestamp(config) {
  const accessToken = window.localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  if (!config.params) {
    config.params = {};
  }
  config.params._ = Date.now();
  return config;
}

const Request = axios.create({
  baseURL: rootPath,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=utf-8"
  }
});

Request.interceptors.request.use(setTimestamp);
Request.interceptors.response.use(handleSuccess, handleError);
Request.interceptors.response.use(res => res);

export default Request;
