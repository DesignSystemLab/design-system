import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  projects: ['<rootDir>/packages/*/jest.config.ts']
};

export default config;
