const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${PORT}`);
});

app.get('/contactos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contactos');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al procesar la solicitud GET:', error);
    res.status(500).send("Error al procesar la solicitud GET");
  }
});

// Manejar la solicitud POST para insertar un nuevo contacto
app.post('/contactos', async (req, res) => {
  try {
    const { num, nombre, apellidos, email, telefono } = req.query;
    await pool.query('INSERT INTO contactos (num, nombre, apellidos, email, telefono) VALUES ($1, $2, $3, $4, $5)', [num, nombre, apellidos, email, telefono]);
    res.status(200).send("Contacto agregado correctamente");
  } catch (error) {
    console.error('Error al agregar un nuevo contacto:', error);
    res.status(500).send("Error al agregar un nuevo contacto");
  }
});

// Manejar la solicitud PUT para actualizar un contacto existente
app.put('/contactos', async (req, res) => {
  try {
    const { num, nombre, email, telefono } = req.query;
    await pool.query('UPDATE contactos SET nombre = $1, telefono = $2, email = $3 WHERE num = $4', [nombre, telefono, email, num]);
    res.status(200).send("Contacto actualizado correctamente");
  } catch (error) {
    console.error('Error al actualizar el contacto:', error);
    res.status(500).send("Error al actualizar el contacto");
  }
});

// Manejar la solicitud DELETE para eliminar un contacto
app.delete('/contactos', async (req, res) => {
  try {
    const num = req.query.num;
    await pool.query('DELETE FROM contactos WHERE num = $1', [num]);
    res.status(200).send("Contacto eliminado correctamente");
  } catch (error) {
    console.error('Error al eliminar el contacto:', error);
    res.status(500).send("Error al eliminar el contacto");
  }
});