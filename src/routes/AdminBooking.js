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
        <h3>Réservation :</h3>
        <div className="booking-container">
          {booking.map((item) => {
            return (
              <>
                <div className="booking-details">
                  <h3>N° de réservation : {item._id}</h3>
                  <div className="booking-info prest">
                    <p>Prestations :</p>
                    <ul>
                      {console.log(item)}
                      {item.prestations.map((prestation) => {
                        return <li>{prestation.name}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="booking-info total">
                    <p>
                      Total : <span>{item.total}€</span>
                    </p>
                  </div>
                  <div className="booking-info time">
                    <p>
                      Durée: <span>{item.time} minutes</span>
                    </p>
                  </div>
                  <div className="booking-info date">
                    <p>
                      Date : <span>{item.date}</span>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
