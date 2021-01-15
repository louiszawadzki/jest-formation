const utils = require("./getRandomRoll");

class Bowling {
  constructor() {
    this.score = 0;
  }

  roll() {
    const pins = utils.getRandomRoll();
    this.score += pins;
  }

  getFinalScore() {
    return this.score;
  }
}

module.exports = Bowling;
