const Bowling = require("./bowling");
const { describe, it, expect, best } = require("./best");
const utils = require("./getRandomRoll");

describe("Bowling", () => {
  it("handles a very boring game", () => {
    utils.getRandomRoll = best.fn(() => 0);
    const game = new Bowling();
    for (rollIndex = 0; rollIndex < 20; rollIndex++) {
      game.roll(0);
    }

    expect(game.getFinalScore()).toBe(0);
    expect(utils.getRandomRoll.mock.calls.length).toBe(20);
  });

  it("handles a game with no spare no strike", () => {
    utils.getRandomRoll = best.fn(() => 1);
    const game = new Bowling();
    for (rollIndex = 0; rollIndex < 20; rollIndex++) {
      game.roll(1);
    }

    expect(game.getFinalScore()).toBe(20);
  });
});
