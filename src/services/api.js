import axios from 'axios'

//constante para fazer a conexão com nossa API
const api = axios.create({
  baseURL: 'https://api.nytimes.com'
})

export default api
