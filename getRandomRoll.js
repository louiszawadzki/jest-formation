const getRandomRoll = (max = 10) => {
  console.log(Math.round(Math.random() * max));
  return Math.round(Math.random() * max);
};

module.exports = {
  getRandomRoll,
};
