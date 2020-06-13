const express = require('express');
const { Router } = express;
const router = new Router();

const Customers = require('../models').customer;

//get all products
router.get('/', async (req, res, next) => {
  try {
    const limit = Math.min(req.query.limit || 25, 500);
    const offset = req.query.offset || 0;
    const customers = await Customers.findAndCountAll({
      limit,
      offset,
    }).then((result) =>
      res.send({ customers: result.rows, total: result.count })
    );
  } catch (e) {
    next(e);
  }
});
module.exports = router;
