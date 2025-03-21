const express = require("express");
const routes = require("./src/routes");

const app = express();
routes(app);

app.listen(3000, () => {
  console.log("Server Listening!");
});

module.exports = app;