import React, { createContext, useContext, useState } from 'react';

const DrawerContext = createContext();

export const useDrawer = () => useContext(DrawerContext);

export const DrawerProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showDrawer = () => setIsVisible(true);
  const hideDrawer = () => setIsVisible(false);

  return (
    <DrawerContext.Provider value={{ isVisible, showDrawer, hideDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
