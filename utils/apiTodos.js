import axios from "axios";
class apiTodos {

  constructor () {
    this.api = axios.create({
      baseURL: "http://localhost:5000"
    })
  }

  getAllCharacters = async () => {
    try {
      const { data } = await this.api.get(`/todos`)
      return data.data.results
    } catch (error) {
      throw new Error('Cannot Fetch Data')
    }
  }
}

export default new apiTodos()
