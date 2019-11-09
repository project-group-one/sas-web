import Request from "~/util/request";

export function query(params) {
  return Request.get("/api/pic", { params }).then(({ data, pagination }) => {
    return {
      data: Array.isArray(data) ? data : [],
      pagination: pagination || {}
    };
  });
}
