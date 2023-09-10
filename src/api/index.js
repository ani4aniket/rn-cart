import axios from 'axios';

// Create an axios instance with the base URL
const api = axios.create({
  baseURL: 'https://64dcae68e64a8525a0f6f04d.mockapi.io/mfg-auth',
});

export default async function callApi(endpoint, method = 'GET', body) {
  try {
    const response = await api.request({
      method,
      url: endpoint,
      data: body,
    });

    return response.data;
  } catch (err) {
    console.log(err);
  }
}
