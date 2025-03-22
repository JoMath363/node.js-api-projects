const express = require("express");
const routes = require("./src/routes");

const app = express();
routes(app);

const port = 3000;

app.listen(port, () => {
  console.log(`Server Listening at http://localhost:${port}`);
});

module.exports = app;