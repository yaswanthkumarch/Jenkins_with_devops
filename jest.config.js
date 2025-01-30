// jest.config.js
module.exports = {
  testMatch: [
    "**/?(*.)+(spec|test).[tj]s?(x)", // Matches test files
  ],
  testPathIgnorePatterns: ["/node_modules/"], // Ignores node_modules during tests
};
