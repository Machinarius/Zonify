import appFactory from "./src/server";
import { Server } from "http";

let server: Server;
process.on("SIGINT", () => {
  console.log("Stopping the express application...");
  server.close(() => {
    process.exit();
  });
});

server = appFactory().listen(8085, () => {
  console.log("App listening on port 8085...");
});
