import axios from 'axios'

const baseUrl = 'https://rocky-bastion-04545.herokuapp.com/api/meals'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const addMeal = async newObject => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const getAllmeals = () => {
  return axios
    .get(baseUrl)
}

export default {
  getAllmeals,
  addMeal,
  setToken
}
