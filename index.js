const express = require('express');
const orderRouter = require('./routers/order');
const productRouter = require('./routers/products');
const authRouter = require('./routers/auth');

const PORT = process.env.PORT || 4000;

const app = express();

const jsonParser = express.json();

app.use(jsonParser);

app.use('/', authRouter);
app.use('/orders', orderRouter);
app.use('/products', productRouter);

app.listen(PORT, console.log(`listening op port: ${PORT}`));
