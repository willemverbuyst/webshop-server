const Customer = require('../models').customer;
const { toData } = require('../auth/jwt');

async function auth(req, res, next) {
    const auth =
      req.headers.authorization && req.headers.authorization.split(" ");
    if (auth && auth[0] === "Bearer" && auth[1]) {
      try {
        const data = toData(auth[1]);
        const customer = await Customer.findByPk(data.customerId);
        if (!customer) {
          res.status(404).send("No user found");
        } else {
          req.customer = customer;
          next();
        }
      } catch (error) {
        res.status(400).send({
          message: `Error ${error.name}: ${error.message}`,
        });
      }
    } else {
      res.status(401).send({
        message: "Please supply some valid credentials",
      });
    }
  }
  
  module.exports = auth;