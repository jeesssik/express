//ejemplo basico de uso de express
const express = require('express');
const app = express();
const port = 3000;   // puerto en el que se ejecutara el servidor

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

//  Example app listening at http://localhost:3000