const express = require('express');
const orderRouter = require('./routers/order');

const PORT = process.env.PORT || 4000;

const app = express();
const jsonParser = express.json();
app.use(jsonParser);

app.use('/orders', orderRouter);

app.listen(PORT, console.log(`listening op port: ${PORT}`));
