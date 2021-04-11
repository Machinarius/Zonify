import express from "express";
import configuration from "@zonify/configuration";

export default () => {
  configuration.validate();

  const app = express();
  app.use((req, res) => {
    res.write("Hello World!");
    res.end();
  });

  return app;
};