import * as axios from 'axios';

// axios.create
const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': '16b61340-e1d0-42ea-b3ed-4d908888b3c3',
  },
});

// Users
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

// Auth
export const authAPI = {
  authMe() {
    return instance.get(`auth/me`);
  },
  logIn(email, password, rememberMe) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logOut() {
    return instance.delete(`auth/login`);
  },
};

// Profile
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    //users`s status
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    //my status, id is in the cookie
    return instance.put(`profile/status/`, {
      status: status,
    });
  },
  updateImage(file) {
    const formData = new FormData();
    // see API-Doc: image
    formData.append('image', file);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
