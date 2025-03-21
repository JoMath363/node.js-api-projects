const express = require("express");
const people = require("./peopleRoute.js");

module.exports = app => {
  app.use(
    express.json(),
    people,
  );
};