const getRandomRoll = (max = 10) => {
  console.log(Math.round(Math.random() * max));
  return Math.round(Math.random() * max);
};

// some call to an API here
throw new Error("Could not find API :((");

module.exports = {
  getRandomRoll,
};
