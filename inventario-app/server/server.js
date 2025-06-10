const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let productos = [];

app.get('/api/productos', (req, res) => {
  res.json(productos);
});

app.post('/api/productos', (req, res) => {
  const nuevo = req.body;
  productos.push(nuevo);
  res.json({ mensaje: 'Producto guardado', producto: nuevo });
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
