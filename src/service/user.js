import Request from "~/util/request";

// 获取当前登录用户
export function find() {
  return Request.get("/api/user/current").then(({ data, error }) =>
    error ? {} : data.data
  );
}

export function update(data, id) {
  return Request.put(`/api/user?mId=${id}&id=${id}`, data).then(
    ({ error }) => error
  );
}

export function updatePassword({ oPwd, nPwd }) {
  return Request.put("/api/user/pwd", { oPwd, nPwd }).then(
    ({ error }) => error
  );
}

export function fetchVerifyCode(phone) {
  return Request.get("/api/user/code?phone=" + phone).then(
    ({ error }) => error
  );
}

export function verify({ frontPath, backPath }) {
  return Request.post("/api/user/verification", { frontPath, backPath }).then(
    ({ error }) => error
  );
}
