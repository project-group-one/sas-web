// 新闻资讯
class NewsModel {
  // id
  id = '';
  // 类型
  type = 0;
  // 标题
  title = '';
  // 简介
  summary = '';
  // 内容
  content = '';
  // 内容存储地址
  storeUrl = '';
  // 时间
  time = 0;
  // 作者
  author = '';
  // 图片
  imgUrl = '';
  // 关键字
  keywords = '';
  // 来源
  source = '';
}

NewsModel.parse = (data = {}) => {
  const m = new NewsModel();
  m.id = data.id || '';
  m.type = data.type || 0;
  m.title = data.title || '';
  m.summary = data.summary || '';
  m.content = data.content || '';
  m.storeUrl = data.storeUrl || '';
  m.time = data.time || '';
  m.author = data.author || '';
  m.imgUrl = data.imgUrl || '';
  m.keywords = data.keywords || '';
  m.source = m.source || '';
  return m;
};

export default NewsModel;
