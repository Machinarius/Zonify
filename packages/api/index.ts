import express from "express";

const app = express();
app.use((req, res) => {
  res.write("Hello World!");
  res.end();
});

app.listen(8080, () => {
  console.log("App listening on port 8080...");
});