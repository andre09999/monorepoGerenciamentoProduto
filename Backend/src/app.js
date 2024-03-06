const express = require('express');

const productRouter = require("./routes/products.router");
const userRouter = require("./routes/user.router.js");

const app = express();
app.use(express.json());


app.get('/', (_req, res) => {
  return res.send('Olá, mundo!');
});

app.use('/product', productRouter);
app.use('/user', userRouter);
module.exports = app;