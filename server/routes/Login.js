const { User } = require('../models/User');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Utilisateur non trouvé');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Mot de passe incorrect');

    res.send('Connexion réussie');
});

module.exports = router;