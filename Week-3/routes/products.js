const express = require("express");
const routes = express.Router();
const productsC = require("../controllers/Products");

routes.get("/discount", productsC.fetchDiscount);
routes
  .route("/")
  .get(productsC.fetchAll)
  .post(productsC.add)
  .put(productsC.update)
  .delete(productsC.delete);
routes.get("/:productId", productsC.fetchSingle);

module.exports = routes;
