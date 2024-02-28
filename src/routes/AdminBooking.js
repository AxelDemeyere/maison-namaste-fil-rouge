import React, { useEffect, useState } from "react";

export default function AdminBooking() {
  const [booking, setBooking] = useState([]);

  const getBooking = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/booking`)
      .then((response) => response.json())
      .then((json) => {
        setBooking(json);
      });
  };

  useEffect(() => {
    getBooking();
  }, []);

  return (
    <>
      <div>
        <h2>Réservation :</h2>
        {booking.map((item) => {
          return (
            <>
              <div className="booking-container">
                <p>N° de réservation : {item._id}</p>
                <div>
                  <ul>
                    {console.log(item)}
                    {item.prestations.map((prestation) => {
                      return <li>{prestation.name}</li>;
                    })}
                  </ul>
                </div>
                <p>total : {item.total}€</p>
                <p>Durée: {item.time} minutes</p>
                <p>Date : {item.date}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
