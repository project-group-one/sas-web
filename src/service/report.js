import Request from "~/util/request";

export function query(params) {
  return Request.get("/api/reports", { params }).then(({ data, error }) =>
    error ? [] : data
  );
}

export function find(id) {
  return Request.get("/api/reports/" + id).then(({ data, error }) =>
    error ? {} : data.data
  );
}

export function create(params) {
  return Request.post("/api/reports", params).then(({ error }) => error);
}
