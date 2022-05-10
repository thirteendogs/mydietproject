import axios from 'axios'

const baseUrl = 'https://rocky-bastion-04545.herokuapp.com/api/meals'

const getAllmeals = () => {
  return axios
    .get(baseUrl)
}

export default {
  getAllmeals
}
