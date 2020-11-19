module.exports = {
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 80,
      functions: 85,
      lines: 85
    }
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'tsx', 'ts'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.[t|j]sx?$': 'babel-jest',
    '^.+\\.tsx$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/tests/unit/**/*.spec.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)'],
  coverageDirectory: '<rootDir>/tests/coverage',
  collectCoverage: false,
  collectCoverageFrom: ['<rootDir>/src/components/**/*.{tsx,ts,vue}', '!**/node_modules/**'],
  globals: {
    'ts-jest': {
      tsConfig: './jest.tsconfig.json'
    }
  },
  coverageReporters: ['text', 'text-summary', 'lcov', 'json-summary', 'json']
}
