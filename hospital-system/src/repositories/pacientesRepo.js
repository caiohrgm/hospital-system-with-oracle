const getConnection = require('../db/connection');

async function listarPacientes() {
  const conn = await getConnection();

  const user = await conn.execute('SELECT USER FROM dual');
  console.log('Conectado como:', user.rows[0][0]);


  const result = await conn.execute('SELECT * FROM SYSTEM.PACIENTES');

  console.log("PASSEI!!")

  await conn.close();
  return result.rows;
}

module.exports = { listarPacientes };
