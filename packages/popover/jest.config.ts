import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest',
    '^.+\\.(css|scss|sass|less)$': 'jest-preview/transforms/css',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': 'jest-preview/transforms/file'
  }
};

export default config;
