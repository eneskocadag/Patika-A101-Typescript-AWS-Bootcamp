const productsS = require("../services/products");

module.exports.add = async (req, res) => {
  let response = await productsS.add(req.body);
  res.send(response);
};
module.exports.fetchAll = async (req, res) => {
  let response = await productsS.fetchAll();
  res.send(response);
};
module.exports.fetchSingle = async (req, res) => {
  let response = await productsS.fetchSingle(req.params);
  res.send(response);
};
module.exports.fetchDiscount = async (req, res) => {
  let response = await productsS.fetchDiscount();
  res.send(response);
};
module.exports.update = async (req, res) => {
  let response = await productsS.update(req.body);
  res.send(response);
};
module.exports.delete = async (req, res) => {
  let response = await productsS.delete(req.body);
  res.send(response);
};
