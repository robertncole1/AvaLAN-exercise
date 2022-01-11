import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;

// GET ALL POSTS FROM API
const getPosts = () => new Promise((resolve, reject) => {
  axios.get(`${apiURL}posts`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET ALL POSTS by USER ID FROM API
const getPostsByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${apiURL}posts?userId=${userId}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export { getPosts, getPostsByUserId };
