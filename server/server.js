const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('../server/routes/Users');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', usersRouter);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('N\'a pas pu se connecter à MongoDB...', err));

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});