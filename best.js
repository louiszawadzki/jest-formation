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
    throw new Error(`❌ ${title}: \n\n${error.message}`);
  }
};

const expect = (receivedValue) => {
  return {
    toBe: (expectedValue) => {
      if (expectedValue !== receivedValue) {
        throw new Error(
          `Expected ${expectedValue} but received ${receivedValue}`
        );
      }
    },
  };
};

const fn = (implementation) => {
  const mock = (...args) => {
    return implementation(...args);
  };
  return mock;
};

module.exports = {
  describe,
  it,
  expect,
  best: {
    fn,
  },
};
