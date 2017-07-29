import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts'; // Show ALL Post
export const CREATE_POST = 'create_posts'; // Create Post
export const FETCH_POST = 'fetch_post'; // Show Particular Post

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=RIZAKEY';

// Action Creator function
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

export function createPost(values, callback) {
  // axios.post is similar to axios.get, but we need second argument (what will post (values))
  // .then is a PROMISE, after the request successfull, execute the .then callback
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request,
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request,
  };
}
