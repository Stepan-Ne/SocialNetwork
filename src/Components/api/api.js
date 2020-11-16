import * as axios from "axios";

const instance = axios.create({
withCredentials: true,
baseURL: `https://social-network.samuraijs.com/api/1.0/`,
headers: {
    "API-KEY": "cf6eb247-09a4-4111-a146-83bd1a7384a7"
}
});

export const usersAPI = {
    getUsers(currentPage, size) {
        return  instance.get(`users?page=${currentPage}&count=${size}`)
      }
}