import express from "express";
import configuration from "@zonify/configuration";
import configureGraphQL from "./schema";

export default () => {
  configuration.validate();

  const app = express();
  configureGraphQL(app);

  app.use((req, res) => {
    res.write("Hello World!");
    res.end();
  });

  return app;
};