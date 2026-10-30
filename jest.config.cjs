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
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.test.{ts,tsx}",
    "!src/main.tsx",
    "!src/vite-env.d.ts",
    "!src/**/__mocks__/**",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "html"],
};