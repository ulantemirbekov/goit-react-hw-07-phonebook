const isLoading = state => state.login.isLoading;
const getIsLoggedIn = state => state.login.isAuthIn;
const getUserName = state => state.login.user.name;

const authSelectors = {
  getIsLoggedIn,
  isLoading,
  getUserName,
};
export default authSelectors;
