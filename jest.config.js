const TEST_REGEX = "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|ts)$";

module.exports = {
  globals: {
    "ts-jest": {
      useBabelrc: true
    }
  },
  testRegex: TEST_REGEX,
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverage: false
};
