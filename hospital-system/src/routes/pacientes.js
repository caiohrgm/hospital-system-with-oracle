const express = require('express');
const router = express.Router();
const repo = require('../repositories/pacientesRepo');

router.get('/', async (req, res) => {
  try {
    const pacientes = await repo.listarPacientes();
    res.json(pacientes);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao listar pacientes');
  }
});

module.exports = router;
