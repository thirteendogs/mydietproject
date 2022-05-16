import axios from 'axios'

const URL_MEALS = 'https://rocky-bastion-04545.herokuapp.com/api/meals'
const URL_USERS = 'https://rocky-bastion-04545.herokuapp.com/api/users'

const getUsername = () => {
  return JSON.parse(window.sessionStorage.getItem('loggedDietAppUser')).username
}

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const addMeal = async newObject => {
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(URL_MEALS, newObject, config)
  return response.data
}

const getAllmeals = async (loggedUser) => {
  const { data } = await axios.get(URL_USERS)

  const userMealsFilter = data.filter(({ username }) => username === getUsername())
  const userMeals = userMealsFilter.map(({ meals }) => [meals])

  return userMeals[0][0]
}

export default {
  getAllmeals,
  addMeal,
  setToken
}
