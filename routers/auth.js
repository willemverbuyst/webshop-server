const { Router } = require('express');
const { toJWT, toData } = require('../auth/jwt');

const Customer = require('../models').customer;
const Order = require('../models').order;

const router = new Router();

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const customer = await Customer.findOne({ where: { email } });

    if (!customer) {
      res.status(404).send('User not found');
    } else {
      const passwordMatch = password === customer.password;

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
    } catch (e) {
      res.status(400).send('Invalid JWT token');
    }
    const allOrders = await Order.findAll({ where: { customerId: 3 } });
    res.json(allOrders);
  } else {
    res.status(401).send({
      message: 'Please supply some valid credentials',
    });
  }
});

module.exports = router;
