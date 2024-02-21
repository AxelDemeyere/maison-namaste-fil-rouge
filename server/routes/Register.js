const { User, validate } = require('../models/User');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('Email déjà utilisé');

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        await user.save();
        const result = {
            _id: user._id,
            name: user.name,
            email: user.email,
        };

        return res.status(201).json(result);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

module.exports = router;