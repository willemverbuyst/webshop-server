const { Router } = require('express');
const router = new Router();

const order = require('../models').order;

router.get('/', async (req, res, next) => {
  try {
    const orders = await order.findAll();
    res.json(orders);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
