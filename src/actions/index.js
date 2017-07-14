import axios from 'axios';

export const FETCH_POSTS = 'fetch_post';

const ROOT_URL = 'https://reduxblog.herokuapp.com/';
const API_KEY = '?key=RIZA12345';
// Action Creator function
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: 'FETCH_POSTS',
    payload: request,
  };
}
