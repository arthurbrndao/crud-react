import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://15.228.254.62:3333',
  timeout: 5000,
})
