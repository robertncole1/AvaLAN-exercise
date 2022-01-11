import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;

// GET ALL COMMENTS FROM API
const getComments = () => new Promise((resolve, reject) => {
  axios.get(`${apiURL}comments`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET ALL COMMENTS by POST ID FROM API
const getCommentsByPostId = (postId) => new Promise((resolve, reject) => {
  axios.get(`${apiURL}comments?postId=${postId}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export { getComments, getCommentsByPostId };
