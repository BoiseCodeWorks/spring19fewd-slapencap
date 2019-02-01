import GameController from "./components/game/GameController.js";


class App {
  constructor() {
    this.controllers = {
      gameController: new GameController()
    }
  }
}

window["app"] = new App()