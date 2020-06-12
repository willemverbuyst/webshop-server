const { Router } = require('express');
const { toJWT, toData } = require('../auth/jwt');
const bcrypt = require('bcrypt');
const Customer = require('../models').customer;
const Order = require('../models').order;
const authMiddleware = require("../auth/middleware");
const router = new Router();

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const customer = await Customer.findOne({ where: { email } });

    if (!customer) {
      res.status(404).send('User not found');
    } else {
      const passwordMatch = bcrypt.compareSync(password, customer.password);

      if (passwordMatch) {
        const token = toJWT({ customerId: customer.id });
        res.send({ token });
      } else {
        res.status(401).send('Wrong password');
      }
    }
  } catch (e) {
    next(e);
  }
});

router.get('/test', async (req, res, next) => {
  const auth =
    req.headers.authorization && req.headers.authorization.split(' ');
  if (auth && auth[0] === 'Bearer' && auth[1]) {
    try {
      const data = toData(auth[1]);
      const allOrders = await Order.findAll({ where: { customerId: data.customerId } });
      res.json(allOrders);
  } catch (e) {
    res.status(400).send('Invalid JWT token');
  }
  } else {
    res.status(401).send({
      message: 'Please supply some valid credentials',
    });
  }
});

router.get("/auth", authMiddleware, (req, res) => {
  res.send({
    message: `You are in! ${req.customer.email}.`
  });
});

module.exports = router;
