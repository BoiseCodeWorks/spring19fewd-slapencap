import Target from "../../models/Target.js";
import Item from "../../models/Item.js";

let _target = new Target("Darth Vader", "https://www.swarovski.com/medias/?context=bWFzdGVyfHJvb3R8NTY1NjV8aW1hZ2UvanBlZ3xoNmIvaDk4LzkwMTUwMTM5OTg2MjIuanBnfDIyMzI2MDI3MjhjZmFiNDk0YzMzMDZlNTk3NGQxNTJiOGMxM2Y5ZTMyMWVmNmYzNGY5OTFhMGQ0NzMwOWI3YTU")

let items = {
  mask: new Item("Mask", "It makes cool sounds when he breathes", -.5),
  saber: new Item("Light Saber", "It hurts?", .25)
}

export default class GameService {
  constructor() {
    console.log("hello from gameservice")
  }

  get target() {
    return {
      name: _target.name,
      health: _target.health,
      img: _target.img,
      attacks: {
        slap: _target.attacks.slap,
        punch: _target.attacks.punch,
        kick: _target.attacks.kick
      }
    }
  }

  attack(attackName) {
    _target.health -= _target.attacks[attackName] * _target.totalMods
  }

  addItem(itemName) {
    let item = items[itemName]
    _target.items.push(item)
    this.calcTotalMods()
  }

  calcTotalMods() {
    // foreach does the same thing
    // for (let i = 0; i < _target.items.length; i++){
    //   let item = _target.items[i]
    // }

    _target.items.forEach(item => {
      _target.totalMods += item.mod
    })
  }
}