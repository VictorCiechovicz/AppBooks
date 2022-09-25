import axios from 'axios'

//constante para fazer a conexão com nossa API
const api = axios.create({
  baseURL: 'https://api.nytimes.com/svc/books/v3'
})

export default api
