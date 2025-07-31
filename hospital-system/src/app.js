require('dotenv').config();
const express = require('express');
const pacientesRoutes = require('../src/routes/pacientes');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/pacientes', pacientesRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})