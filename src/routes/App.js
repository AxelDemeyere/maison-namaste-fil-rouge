import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RegistrationForm from './RegistrationForm';
import '../stylesheets/App.css';

function App() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <div>
      <Header onMonCompteClick={showDrawer} />
      <Carousel />
      <SearchBar />
      <RegistrationForm 
        isOpen={isDrawerVisible} 
        onClose={onCloseDrawer} 
      />
    </div>
  );
}

export default App;
