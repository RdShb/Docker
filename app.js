// Se declaran las constantes a usar
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'luis',
  host: 'db',
  database: 'basededatos',
  password: 'lautaro',
  port: 5432,
});

// Aca se configura lo que se quiere mostrar en el puerto
app.get('/', async (req, res) => {
  const result = await pool.query('SELECT $1::text as message', ['Node JS con PostgreSQL de Luis Falcón y Lautaro Rocca!']);
  res.send(result.rows[0].message);
});

// Se establece el puerto a escuchar con la direccion web
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

