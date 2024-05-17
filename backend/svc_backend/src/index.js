const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  user: 'postgres',
  host: '10.88.0.2',
  database: 'trabajorest',
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



app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Usuario:", username);
    console.log("Contraseña:", password);

    try {
      const result = await pool.query('SELECT * FROM contactos WHERE nombre_usu=$1 AND clave=$2', [username, password]);

      console.log("Resultados:", result.rows);
      
      if (result.rows.length > 0) {
        res.sendStatus(200); 
      } else {
        res.status(401).json({ error: 'Credenciales incorrectas' });
      }
    } catch (error) {
      console.error('Error al ejecutar la consulta:', error);
      res.status(500).json({ error: 'Error al procesar la solicitud de inicio de sesión' });
    }
  
  } catch (error) {
    console.error('Error al procesar la solicitud de inicio de sesión:', error);
    res.status(500).json({ error: 'Error al procesar la solicitud de inicio de sesión' });
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

app.get('/obtenerdetalle', async (req, res) => {
  try {
    const id = req.query.id;
    const nombre_usu = req.query.nombre_usu;
    let consulta;
    if(id != null)
      {
        consulta = `SELECT id, nombre_usu, nombre, apellido, email, telefono, imagen FROM contactos where id = ${id}`;
      }
    if(nombre_usu != null)
      {
        consulta = `SELECT id, nombre_usu, nombre, apellido, email, telefono, imagen FROM contactos where nombre_usu = '${nombre_usu}'`;
      }
    const result = await pool.query(consulta);
    res.json(result.rows);
  } catch (error) {
    console.error('Error al procesar la solicitud GET:', error);
    res.status(500).send("Error al procesar la solicitud GET");
  }
});

app.get('/obtenercontactos', async (req, res) => {
  try {
    const result = await pool.query('SELECT id,nombre,apellido,imagen,estado FROM contactos ORDER BY id');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al procesar la solicitud GET:', error);
    res.status(500).send("Error al procesar la solicitud GET");
  }
});

app.get('/obtenermensajes', async (req, res) => {
  try {
    const result = await pool.query('SELECT nombre_usu, hora, mensaje FROM chat ORDER BY id');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error al procesar la solicitud GET:', error);
    res.status(500).send("Error al procesar la solicitud GET");
  }
});


app.put('/actualizarestado', async (req, res) => {
  try {
    
    const { username, estado }= req.body;
    await pool.query('UPDATE contactos SET estado = $1 WHERE nombre_usu = $2', [estado,username]);
    res.status(200).send("Estado actualizado correctamente");
  } catch (error) {
    console.error('Error al actualizar el contacto:', error);
    res.status(500).send("Error al actualizar el contacto");
  }
});

app.put('/insertarmensaje', async (req, res) => {
  try {
    const { contenido, nombre_usu ,hora}= req.body;
    await pool.query(`INSERT INTO chat (nombre_usu, hora, mensaje) VALUES ('${nombre_usu}','${hora}','${contenido}')`);
    res.status(200).send("Mensaje insertado correctamente");
  } catch (error) {
    console.error('Error al insertar el mensaje:', error);
    res.status(500).send("Error al insertar el mensaje");
  }
});