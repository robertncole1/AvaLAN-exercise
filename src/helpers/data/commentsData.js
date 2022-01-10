import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;

// GET ALL COMMENTS FROM API
const getComments = () => new Promise((resolve, reject) => {
  axios.get(`${apiURL}/comments`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getComments;
