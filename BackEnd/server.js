// backend/server.js
const express = require('express');
const cors = require('cors');
const estudosRoutes = require('./routes/estudosRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Usar as rotas definidas no estudosRoutes.js
app.use('/api/estudos', estudosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
