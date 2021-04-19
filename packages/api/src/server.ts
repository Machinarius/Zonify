import express from "express";
import configuration from "@zonify/configuration";
import configureGraphQL from "./schema";

export default () => {
  configuration.validate();

  const app = express();
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Max-Age", "86400");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      res.status(200);
      res.send();
      return;
    }

    return next();
  });

  configureGraphQL(app);

  app.use((req, res) => {
    res.write("4 Oh 4!");
    res.status(404);
    res.end();
  });

  return app;
};