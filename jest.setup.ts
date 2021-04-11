import '@testing-library/jest-dom';

process.on("unhandledRejection", (reason: unknown) => {
  console.log(reason);
  throw reason;
});
