import Request from '~/util/request';

export function query(params) {
  return Request.get('/news', params).then(res => console.log(res));
}
