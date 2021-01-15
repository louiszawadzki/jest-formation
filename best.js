const describe = (title, callback) => {
  try {
    callback();
    console.info(`All tests passed!`);
    process.exit(0);
  } catch (error) {
    console.error(`Test failed! \n\n${title}\n ${error.message}`);
    process.exit(1);
  }
};

const it = (title, callback) => {
  try {
    callback();
  } catch (error) {
    throw new Error(`❌ ${title}: \n\nreceived: ${error.message}`);
  }
};

module.exports = {
  describe,
  it,
};
