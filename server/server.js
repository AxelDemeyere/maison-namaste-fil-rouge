const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('../server/routes/Users');

const app = express();

mongoose.connect('mongodb://localhost:27017/NM.users', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('N/a pas pu se connecter à MongoDB...', err));

app.use(express.json());

app.use('/api/users', usersRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));