const express = require("express");
const routes = express.Router();
const productsEndpoint = require("./products");

routes.use("/products", productsEndpoint);

module.exports = routes;
