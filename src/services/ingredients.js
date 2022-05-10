import axios from 'axios'

const baseUrl = 'https://rocky-bastion-04545.herokuapp.com/api/ingredients'

const getAllIngredients = () => {
  return axios
    .get(baseUrl)
}

export default {
  getAllIngredients
}
