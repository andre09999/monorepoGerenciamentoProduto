require('dotenv').config();

const app = require('./app');

const PORT = process.env.API_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});

