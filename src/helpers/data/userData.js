import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;

// GET ALL USERS FROM API
const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${apiURL}users`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getUsers;
