/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  // projects: ['<rootDir>', '<rootDir>/packages/select/'],
  // testPathIgnorePatterns: ['<rootDir>/packages/select/node_modules'],
  // transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)'],
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest'
  }
};
