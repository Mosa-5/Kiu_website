export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",

  // ✅ Add this to avoid the 'html' undefined crash
  testEnvironmentOptions: {
    html: "<!doctype html><html><head></head><body></body></html>",
    url: "http://localhost/",
  },

  roots: ["<rootDir>/tests/unit"],
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  collectCoverageFrom: [
    "tests/utils/**/*.ts",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: {
          jsx: "react",
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
        },
      },
    ],
  },
};
