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
    mock.mock.calls.push(args);
    return implementation(...args);
  };
  mock.mock = { calls: [] };
  return mock;
};

const mock = (path, moduleMock) => {
  const modulePath = require.resolve(path);
  require.cache[modulePath] = {
    id: modulePath,
    filename: modulePath,
    loaded: true,
    exports: moduleMock,
  };
};

module.exports = {
  describe,
  it,
  expect,
  best: {
    fn,
    mock,
  },
};
