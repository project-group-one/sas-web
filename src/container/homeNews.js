import connect from '~/util/connect';
import { query } from '~/service/news';
import HomeNewsView from '~/view/home/news'

const HomeNewsContainer = connect(
  ({ tableStore }) => ({
    data: tableStore.data,
    conditions: tableStore.conditions
  }),
  ({ tableSotre }) => ({
    query: conditions => {
      query(conditions);
    }
  })
)(HomeNewsView);

export default HomeNewsContainer
