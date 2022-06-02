import { defaults as tsjPreset } from 'ts-jest/presets'

const config = {
  roots: ['<rootDir>/src'],
  verbose: true,
  preset: '@shelf/jest-mongodb',
  transform: tsjPreset.transform,
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
}
export default config
