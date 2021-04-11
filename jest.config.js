module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts"
  ],
  moduleFileExtensions: ["js", "json", "jsx", "ts", "d.ts", "tsx"]
};