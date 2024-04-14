import { ConfigProvider } from "antd";
import frFR from "antd/locale/fr_FR";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import About from "./routes/About";
import Admin from "./routes/Admin";
import AdminBooking from "./routes/AdminBooking";
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
      <ConfigProvider locale={frFR}>
        <Layout>
          <Routes>
            <Route path={"/"} element={<App />} />
            <Route path={"/a-propos"} element={<About />} />
            <Route path={"/prestations"} element={<Prestations />} />
            <Route path={"/rendez-vous"} element={<RendezVous />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/carte-cadeau"} element={<CarteCadeau />} />
            <Route
              path={`/${process.env.REACT_APP_ADMIN_URL}`}
              element={<Admin />}
            />
            <Route path={"/*"} element={<NotFound />} />
            <Route path={"/admin/booking"} element={<AdminBooking />} />
          </Routes>
        </Layout>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
