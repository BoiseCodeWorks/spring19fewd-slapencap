import GameService from "./GameService.js";

let _gameService = new GameService()

function draw() {
  let target = _gameService.target
  let template = `
    <h1>${target.name}</h1>
    <img src="${target.img}" alt="" srcset="">
    <h1>${target.health}</h1>
    <button type="button" onclick="app.controllers.gameController.attack('slap')">Slap</button>
    <button type="button" onclick="app.controllers.gameController.attack('punch')">Punch</button>
    <button type="button" onclick="app.controllers.gameController.attack('kick')">Kick</button>
  `
  document.querySelector("#vader").innerHTML = template
}

function drawItems() {
  let template = `
    <button type="button" onclick="app.controllers.gameController.addItem('mask')">Mask</button>  
    <button type="button" onclick="app.controllers.gameController.addItem('saber')">Light Saber</button>  
  `
  document.querySelector("#items").innerHTML = template
}


export default class GameController {
  constructor() {
    console.log("Game controller successfully created1!111!!")
    draw()
    drawItems()
  }

  attack(attackName) {
    _gameService.attack(attackName)
    draw()
  }

  addItem(itemName) {
    _gameService.addItem(itemName)
    drawItems()
  }
}