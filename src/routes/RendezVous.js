import { Calendar } from "antd";
import locale from "antd/es/date-picker/locale/fr_FR";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Cart from "../components/Cart";
import ModalConfirmationResa from "../components/ModalConfirmationResa";

function RendezVous() {
  const location = useLocation();
  const cartData = location.state;

  const [selectedDate, setSelectedDate] = useState("");
  const [booking, setBooking] = useState({
    prestations: [],
    time: 0,
    price: 0,
    date: "",
  });

  const navigate = useNavigate();
  const buttonOpen = useRef(null);
  const modalElement = useRef(null);

  //Ajouter une réservation

  const addBooking = async (e) => {
    e.preventDefault();

    const prestations = location.state.prestations;
    const time = location.state.time;
    const total = location.state.total;
    const date = selectedDate;

    setBooking({
      prestations,
      time,
      total,
      date,
    });

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          prestations,
          date,
          time,
          total,
        }),
      });

      if (!response.ok) {
        throw new Error("Echec de la réservation");
      }
    } catch (error) {
      console.error("Erreur de l'ajout:", error);
    }
    navigate("/");
  };

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

  console.log(cartData);

  return (
    <>
      <main className="main-rdv">
        <Cart
          prestations={cartData.prestations}
          total={cartData.total}
          time={cartData.time}
        />
        <div className="date-picker">
          <Calendar
            className="calendar"
            locale={locale}
            fullscreen={false}
            onSelect={(e) => {
              setSelectedDate(e.$d);
            }}
          />
        </div>
        {/* TODO */}
        {/* <div className="time-picker"></div> */}

        <div className="button-div">
          <button ref={buttonOpen}>Continuer</button>
        </div>
      </main>
      <div className="confirmModal" ref={modalElement}>
        <ModalConfirmationResa
          addBooking={addBooking}
          buttonOpen={buttonOpen}
          modalElement={modalElement}
          booking={booking}
        />
      </div>
    </>
  );
}

export default RendezVous;
