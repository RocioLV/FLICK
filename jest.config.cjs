module.exports = {
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
  },
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^.+\\.(css|scss|sass|png|jpg|jpeg|gif|svg|webp)$":
      "<rootDir>/src/__mocks__/file-mock.cjs",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};