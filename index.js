const express = require('express');
const orderRouter = require('./routers/order');
const productRouter = require('./routers/products');
const authRouter = require('./routers/auth');
const customerRouter = require('./routers/customers');

const cors = require('cors');

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());

const jsonParser = express.json();

app.use(jsonParser);

app.use('/', authRouter);
app.use('/orders', orderRouter);
app.use('/products', productRouter);
app.use('/customers', customerRouter);

app.listen(PORT, console.log(`listening op port: ${PORT}`));
