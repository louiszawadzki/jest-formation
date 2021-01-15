const Bowling = require("./bowling");
const { describe, it, expect } = require("./best");
const utils = require("./getRandomRoll");

describe("Bowling", () => {
  it("handles a very boring game", () => {
    utils.getRandomRoll = () => 0;
    const game = new Bowling();
    for (rollIndex = 0; rollIndex < 20; rollIndex++) {
      game.roll(0);
    }

    expect(game.getFinalScore()).toBe(0);
  });

  it("handles a game with no spare no strike", () => {
    utils.getRandomRoll = () => 1;
    const game = new Bowling();
    for (rollIndex = 0; rollIndex < 20; rollIndex++) {
      game.roll(1);
    }

    expect(game.getFinalScore()).toBe(20);
  });
});
