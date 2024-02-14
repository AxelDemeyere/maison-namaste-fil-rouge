import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    address: '',
    email: '',
    gender: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!formData.firstName) {
      formIsValid = false;
      errors['firstName'] = 'Prénom requis';
    }

    if (!formData.lastName) {
      formIsValid = false;
      errors['lastName'] = 'Nom requis';
    }

    if (!formData.birthDate) {
      formIsValid = false;
      errors['birthDate'] = 'Date de naissance requise';
    }

    if (!formData.email) {
      formIsValid = false;
      errors['email'] = 'Email requis';
    } else if (!formData.email.match(/\S+@\S+\.\S+/)) {
      formIsValid = false;
      errors['email'] = 'Email non valide';
    }    

    if (!formData.gender) {
      formIsValid = false;
      errors['gender'] = 'Veuillez indiquer votre genre';
    }

    setErrors(errors);
    return formIsValid;
  };

  const getAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Formulaire valide', formData);
    } else {
      console.log('Formulaire incomplet');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Prénom :</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <div style={{color: 'red'}}>{errors.firstName}</div>}
      </div>
      <div>
        <label>Nom :</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <div style={{color: 'red'}}>{errors.lastName}</div>}
      </div>
      <div>
        <label>Date de naissance :</label>
        <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
        {errors.birthDate && <div style={{color: 'red'}}>{errors.birthDate}</div>}
      </div>
      <div>
        <label>Email :</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <div style={{color: 'red'}}>{errors.email}</div>}
      </div>
      <div>
        <label>Genre :</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="female">Femme</option>
          <option value="male">Homme</option>

        </select>
        {errors.gender && <div style={{color: 'red'}}>{errors.gender}</div>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;