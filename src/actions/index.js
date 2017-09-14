import axios from 'axios';

export const CREATE_SIGNUP = 'CREATE_SIGNUP';
export const FETCH_SIGNUP = 'FETCH_SIGNUP';
export const CREATE_LOGIN = 'CREATE_LOGIN';
export const FETCH_LOGIN = 'FETCH_LOGIN';
export const CREATE_LOGOUT = 'CREATE_LOGOUT';
export const FETCH_LOGOUT = 'FETCH_LOGOUT';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_REP_INFO = 'CREATE_REP_INFO';

const ROOT_URL = '/api';
const API_KEY = "?Key=Tonto";

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

 return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost (props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request

  };
}

export function createExaminerInformation (props) {
  const request = axios.post(`${ROOT_URL}/examinerinfo${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request

  };
}

export function createRepInfo (props) {
  const request = axios.post(`${ROOT_URL}/repinfo${API_KEY}`, props);
  return {
    type: CREATE_REP_INFO,
    payload: request

  };
}

export function fetchPost (id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}`);
  return {
    type: DELETE_POST,
    payload: request
  };
}

export function requestRegister (props) {
  const request = axios.post(`${ROOT_URL}/register`, props);
  return {
    type: FETCH_SIGNUP,
    payload: request
  };
}

export function requestLogin (props) {
  const request = axios.post(`${ROOT_URL}/login`, props);
  return {
    type: FETCH_LOGIN,
    payload: request
  };
}

export function requestLogout () {
  const request = axios.post(`${ROOT_URL}/logout`);
  return {
    type: FETCH_LOGOUT,
    payload: request
  };
}
