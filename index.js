const express = require('express');
const { produtoRoutes } = require ('./src/routes');
const port = '3000';
const app = express();
app.use(express.json());


// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(produtoRoutes);

app.listen(port, () => {
  console.log('Online');
});