import { Calendar } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cart from "../components/Cart";

function RendezVous(removeFromCart) {
  const location = useLocation();
  const cartData = location.state;

  const [selectedDate, setSelectedDate] = useState("");
  const [booking, setBooking] = useState({
    prestations: {},
    time: 0,
    price: 0,
    date: "",
  });

  useEffect(() => {
    setBooking({
      prestations: location.state.prestations,
      time: location.state.time,
      total: location.state.total,
      date: selectedDate,
    });
  }, [
    location.state.prestations,
    location.state.time,
    location.state.total,
    selectedDate,
  ]);

  if (!cartData) {
    return <p className="panier-vide">Aucune donnée de panier trouvée.</p>;
  }

  return (
    <>
      <main className="main-rdv">
        <Cart
          prestations={cartData.prestations}
          total={cartData.total}
          time={cartData.time}
          removeFromCart={removeFromCart}
        />
        <div className="date-picker">
          <Calendar
            className="calendar"
            fullscreen={false}
            onSelect={(e) => {
              setSelectedDate(e.$d);
              console.log(e);
            }}
          />
        </div>
        <div className="time-picker"></div>
      </main>
    </>
  );
}

export default RendezVous;
