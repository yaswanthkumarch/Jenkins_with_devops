// jest.config.js
module.exports = {
  testMatch: [
    '**/?(*.)+(spec|test).[tj]s?(x)', // Matches files like app.test.js or app.spec.ts
  ],
  testPathIgnorePatterns: ['/node_modules/'],
};
