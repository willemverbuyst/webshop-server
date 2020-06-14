const express = require('express');
const { Router } = express;
const bcrypt = require('bcrypt');
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

router.post('/', async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).send('missing parameters');
    } else {
      const newCustomer = await Customers.create({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      res.json(newCustomer);
    }
  } catch (error) {
    next(error);
  }
});
module.exports = router;
