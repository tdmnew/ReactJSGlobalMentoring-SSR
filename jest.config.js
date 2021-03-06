module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/MoviesAPI.ReactJS/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '\\.(css|less|scss|sass)$': 'jest-css-modules-transform',
  },
};
