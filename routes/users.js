const express = require('express');
const router = express.Router();

// Exemplo de rota
router.get('/', (req, res) => {
  res.send('Rota /users funcionando!');
});

module.exports = router;
