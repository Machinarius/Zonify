import appFactory from "./server";

appFactory().listen(8080, () => {
  console.log("App listening on port 8080...");
});
