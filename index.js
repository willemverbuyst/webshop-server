const express = require('express');

const PORT = process.env.PORT || 4000;

const app = express();
const jsonParser = express.json();

app.listen(PORT, console.log(`listening op port: ${PORT}`));
