import axios from 'axios'
const baseUrl = 'https://rocky-bastion-04545.herokuapp.com/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }
