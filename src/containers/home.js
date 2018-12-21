import connect from '~/utils/connect';
import HomeView from '~/views/home';

const HomeContainer = connect(
  state => {
    return {
      user: state.globalStore.user
    };
  },
  dispatch => {
    return {
      getUser: dispatch.globalStore.getUser
    };
  },
  HomeView
);

export default HomeContainer;
