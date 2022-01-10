import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;

// GET ALL POSTS FROM API
const getPosts = () => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/posts`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getPosts;
