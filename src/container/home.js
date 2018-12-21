import connect from '~/util/connect';
import HomeView from '~/view/home';

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
