import _store from "../store.js";
import Clue from "../Models/Clue.js"

const _api = axios.create({
  baseURL: "https://jservice.io/api/clues",
  timeout: 3000
})
class CluesService {
  constructor() {
    console.log("hey")
  }

  getClues() {
    _api.get("").then(res => {
      console.log(res.data)
      let clues = res.data.map(rawClueData => new Clue(rawClueData))
      _store.commit("clues", clues)
    }).catch(err => console.error(err))
  }

}
const service = new CluesService();
export default service;
