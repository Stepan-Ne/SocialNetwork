
  export const getusers = (state) => {
      return state.usersPage.users;
  }
  export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getLoading = (state) => {
    return state.usersPage.loading;
}
export const getUsersIdfollowingProgress = (state) => {
    return state.usersPage.usersIdfollowingProgress;
}
