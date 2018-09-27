import axios from 'axios';

export async function postUserAuthentication(data) {
  const response = await axios.post('users/login', data);
  return response;
}
