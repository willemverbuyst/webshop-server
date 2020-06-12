const { Router } = require('express');
const router = new Router();

const order = require('../models').order;
const order_products = require('../models').order_products;

router.get('/', async (req, res, next) => {
  try {
    const orders = await order.findAll();
    res.json(orders);
  } catch (e) {
    next(e);
  }
});

router.get('/:customerId', async (req, res, next) => {
  try {
    const { customerId } = req.params;
    const orders = await order.findAll({ where: { customerId: customerId } });
    if (orders.length < 1) {
      res.status(404).send('No orders found for this customer!');
    } else {
      res.json(orders);
    }
  } catch (e) {
    next(e);
  }
});

router.post('/:customerId', async (req, res, next) => {
  try {
    const { productId, amount } = req.body;
    const { customerId } = req.params;

    if (!amount || !productId) {
      res.status(400).send('missing parameters');
    } else {
      const newOrder = await order.create({
        date: '13/6/2020',
        customerId: customerId,
      });

      const newOrderProducts = await order_products.create({
        orderId: newOrder.id,
        productId,
        amount,
      });

      res.json(newOrderProducts);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
