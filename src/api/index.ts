import axios from 'axios'

const apiConnect = axios.create({
  baseURL: 'https://api.ezfrontend.com/',
})
apiConnect.interceptors.request.use((request: any) => request, (error) => Promise.reject(error))
apiConnect.interceptors.response.use((response: any) => response, (error) => Promise.reject(error))

export default apiConnect
