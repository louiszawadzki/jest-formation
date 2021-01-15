const describe = (title, callback) => {
  try {
    callback();
  } catch (error) {
    throw new Error(`${title} ${error.message}`);
  }
};

module.exports = {
  describe,
  it: describe,
};
