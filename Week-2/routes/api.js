const express = require("express");
const routes = express.Router();
const brandsroutes = require("./brands");
const categoriesRoutes = require("./categories");
const loginRoutes = require("./login");
const registerRoutes = require("./register");

//! Endpoints
routes.use("/brands", brandsroutes);
routes.use("/categories", categoriesRoutes);
routes.use("/login", loginRoutes);
routes.use("/register", registerRoutes);

module.exports = routes;
