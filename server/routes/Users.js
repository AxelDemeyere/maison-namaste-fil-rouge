const express = require('express');
const router = express.Router();

router.post('/register', async (req, res) => {
  res.send('Utilisateur enregistré');
});

module.exports = router;