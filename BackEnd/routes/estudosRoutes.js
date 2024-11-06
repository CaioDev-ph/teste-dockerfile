// backend/routes/estudosRoutes.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Caminho para o arquivo de dados
const dataFilePath = path.join(__dirname, '..', 'data', 'estudos.json');

// Função para carregar os dados do arquivo JSON
const loadData = () => {
  return JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
};

// Função para salvar os dados no arquivo JSON
const saveData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// Rota para obter todas as atividades de estudo
router.get('/', (req, res) => {
  const dados = loadData();
  res.json(dados);
});

// Rota para adicionar ou atualizar uma atividade de estudo
router.post('/', (req, res) => {
  const { dia, periodo, atividade } = req.body;
  const dados = loadData();

  // Verifica se o dia é válido e atualiza a atividade para o período especificado
  if (dados[dia]) {
    dados[dia][periodo] = atividade;
    saveData(dados);
    res.status(200).json({ message: 'Atividade atualizada com sucesso' });
  } else {
    res.status(400).json({ message: 'Dia inválido' });
  }
});

module.exports = router;
