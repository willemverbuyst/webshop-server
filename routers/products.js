const express = require("express");
const { Router } = express;
const router = new Router();

const Products = require("../models").product

//get all products
router.get("/", async (req, res, next) => {
    try {
      const limit = Math.min(req.query.limit || 25, 500);
      const offset = req.query.offset || 0;
      const products = await Products.findAndCountAll({
        limit,
        offset,
      })
      .then((result) => res.send({ products: result.rows, total: result.count }))
    } catch (e) {
      next(e);
    }
  });  

  //get one specific product
router.get("/:productId", async (req, res) => {
    const productId = parseInt(req.params.productId);
    const product = await Products.findByPk(productId);
    if (!product) {
      res.status(404).send("User not found");
    } else {
      res.send(product);
    }
  });  

module.exports = router