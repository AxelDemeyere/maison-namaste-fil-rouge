const express = require('express');
const router = express.Router();
const { User, validateUser } = require('../../models/User');

router.post('/register', async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registered.');

  user = new User({
    // Vos champs ici
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    // etc.
  });
  await user.save();

  res.send(user);
});

module.exports = router;