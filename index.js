const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const authRouter = require('./routers/auth')

const jsonParser = express.json();

app.use(jsonParser);

app.use('/', authRouter);


app.listen(port, () => console.log(`Listening on ${port} port...`));