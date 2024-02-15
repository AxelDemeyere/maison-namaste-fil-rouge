import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Prestations from './routes/Prestations';
import RendezVous from './routes/RendezVous';
import Contact from './routes/Contact';
import CarteCadeau from './routes/CarteCadeau';
import NotFound from './routes/NotFound';
import About from './routes/About';
import MonCompte from './routes/MonCompte';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App />} />
        <Route path={'/a-propos'} element={<About />} />
        <Route path={'/prestations'} element={<Prestations />} />
        <Route path={'/rendez-vous'} element={<RendezVous />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/carte-cadeau'} element={<CarteCadeau />} />
        <Route path={'/mon-compte'} element={<MonCompte />} />
        <Route path={'/*'} element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
