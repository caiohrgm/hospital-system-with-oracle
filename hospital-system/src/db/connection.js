const oracledb = require('oracledb');
require('dotenv').config();

async function getConnection() {

  console.log(process.env.DB_USER)
  console.log(process.env.DB_PASSWORD)


  return await oracledb.getConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectString: process.env.DB_CONNECTION_STRING,
  });
}

module.exports = getConnection;
