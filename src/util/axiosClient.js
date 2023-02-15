import axios from 'axios'

const axiosClient = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8'
  },
  baseURL: '/api/'
})

axiosClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      axiosClient.tokenExpired = true
    }
    return error
  }
)

export default axiosClient
