// App.js
import React, { useState } from 'react';
import { Drawer } from 'antd';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RegistrationForm from '../routes/RegistrationForm';

function App() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div className="App">
      <Header onMonCompteClick={showDrawer} />
      <Carousel />
      <SearchBar />
      <Drawer
        title="Mon compte"
        width={720}
        onClose={onCloseDrawer}
        visible={drawerVisible}
        placement="right"
      >
        <RegistrationForm />
      </Drawer>
    </div>
  );
}

export default App;