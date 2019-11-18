import Request from "~/util/request";

export function query(params) {
  return Request.get("/api/pic", { params }).then(({error, data: { data, pagination }}) => {
    return {
      data: !error && Array.isArray(data) ? data : [],
      pagination: !error ? pagination : {}
    };
  });
}
