

export default class Target {
  constructor(name, img) {
    this.name = name
    this.health = 100
    this.img = img
    this.attacks = {
      slap: 1,
      punch: 5,
      kick: 10
    }
    this.items = []
    this.totalMods = 1
  }
}