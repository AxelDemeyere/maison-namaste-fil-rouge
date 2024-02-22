import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import About from "./routes/About";
import Admin from "./routes/Admin";
import App from "./routes/App";
import CarteCadeau from "./routes/CarteCadeau";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";
import Prestations from "./routes/Prestations";
import RendezVous from "./routes/RendezVous";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={"/"} element={<App />} />
          <Route path={"/a-propos"} element={<About />} />
          <Route path={"/prestations"} element={<Prestations />} />
          <Route path={"/rendez-vous"} element={<RendezVous />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/carte-cadeau"} element={<CarteCadeau />} />
          <Route path={"/admin"} element={<Admin />} />
          <Route path={"/*"} element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
