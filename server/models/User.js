const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date },
  email: { type: String, required: true },
  phoneNumber: { type: String },
  gender: { type: String },
  codePostal: { type: String },
  ville: { type: String },
  password: { type: String, required: true },
});

function validateUser(user) {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(100).required(),
    lastName: Joi.string().min(3).max(100).required(),
    dateOfBirth: Joi.date(),
    email: Joi.string().min(5).max(255).required().email(),
    phoneNumber: Joi.string(),
    gender: Joi.string(),
    codePostal: Joi.string(),
    ville: Joi.string(),
    password: Joi.string().min(8).max(100).required()
  });
  return schema.validate(user);
}

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
  validateUser
};