import _cluesService from "../Services/CluesService.js";
import store from "../store.js";
let count = 0
//Private
function _draw(num = 0) {
  let clues = store.State.clues;
  let template = clues[num].Template
  document.getElementById("clues").innerHTML = template;
  console.log("draw ran")
}

//Public
export default class CluesController {
  constructor() {
    store.subscribe("clues", _draw);
    _cluesService.getClues()
  }

  advance() {
    count++;
    _draw(count)
  }
}
