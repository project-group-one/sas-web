// 新闻资讯
class NewsModel {
  // id
  id = '';
  // 标题
  title = '';
  // 内容
  content = '';
  // 时间
  time = 0;
}

NewsModel.parse = (data = {}) => {
  const m = new NewsModel();
  m.id = data.id || '';
  m.title = data.title || '';
  m.content = data.content || '';
  m.time = data.time || '';
  return m;
};

export default NewsModel;
