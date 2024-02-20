import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RegistrationForm from './RegistrationForm';
import '../stylesheets/App.css';

function App() {
  const [isRegistrationFormOpen, setIsRegistrationFormOpen] = useState(false);

  return (
    <div>
    <Header onCompteClientClick={() => setIsRegistrationFormOpen(true)} />
      <RegistrationForm 
        isOpen={isRegistrationFormOpen} 
        onClose={() => setIsRegistrationFormOpen(false)}
        />
      <Carousel />
      <SearchBar />
    </div>
  );
}

export default App;