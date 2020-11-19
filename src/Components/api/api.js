import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': '16b61340-e1d0-42ea-b3ed-4d908888b3c3',
  }
});

// const instancePOST = axios.create({}, {
//     withCredentials: true,
//     baseURL: `https://social-network.samuraijs.com/api/1.0/`,
//     headers: {
//       'API-KEY': 'cf6eb247-09a4-4111-a146-83bd1a7384a7',
//     }
// });

export const usersAPI = {
  getUsers(currentPage, size) {
    return instance.get(`users?page=${currentPage}&count=${size}`);
  },
  deleteUsers(userId) {
    return instance.delete(`follow/${userId}`);
  },
  postUsers(userId) {
    return instance.post(`follow/${userId}`);
  },
  getProfile(userId) {
      return instance.get(`profile/` + userId)
  },
  authMe() {
    return instance.get(`auth/me`)
  }
};
