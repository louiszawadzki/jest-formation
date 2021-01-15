class Bowling {
  constructor() {
    this.score = 0;
  }

  roll(pins) {
    this.score += pins;
  }

  getFinalScore() {
    return this.score;
  }
}

module.exports = Bowling;
