import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': '16b61340-e1d0-42ea-b3ed-4d908888b3c3',
  },
});

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
    console.warn('Obsolete method. Please, use profileAPI.getProfile');
    return profileAPI.getProfile(userId);
  },
  authMe() {
    return instance.get(`auth/me`);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) { //users`s status 
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) { //my status, id is in the cookie
    return instance.put(`profile/status/`, {
      status: status
    })
  }
};
