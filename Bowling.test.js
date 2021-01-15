const Bowling = require("./bowling");
const { describe, it, expect } = require("./best");

describe("Bowling", () => {
  it("handles a very boring game", () => {
    const game = new Bowling();
    for (rollIndex = 0; rollIndex < 20; rollIndex++) {
      game.roll(0);
    }

    expect(game.getFinalScore()).toBe(0);
  });

  it("handles a game with no spare no strike", () => {
    const game = new Bowling();
    for (rollIndex = 0; rollIndex < 20; rollIndex++) {
      game.roll(1);
    }

    expect(game.getFinalScore()).toBe(20);
  });
});
