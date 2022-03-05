const express = require('express');
const conectDB = require('./config/db');

// Creamos el servidor
const app = express();

// Conectamos a la BD
conectDB();

app.use(express.json());

app.use('/api/products', require('./routes/product'));

app.listen(3000, () => {
    console.log('El servidor esta corriendo perfectamente')
})