import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

export default function ModalConfirmationResa(props) {
  function close(e) {
    e.preventDefault();
    props.modalElement.current.style.display = "none";
  }

  function open() {
    props.modalElement.current.style.display = "block";
  }

  useEffect(() => {
    props.buttonOpen.current.onclick = open;
  });

  return (
    <>
      <div className="modal">
        <FontAwesomeIcon className="btn-close" icon={faXmark} onClick={close} />

        <div className="modal-recap">
          <h2>Récapitulatif</h2>
          <p>Ce que nous allons faire ensemble :</p>
          <ul>
            {props.booking.prestations.map((prestation) => {
              return <li>{prestation.name} </li>;
            })}
          </ul>

          <p>Nous allons rester ensemble {props.booking.time} minutes</p>
          <p>Ces prestations valent {props.booking.total}€ au total</p>
          <div className="button-div">
            <button onClick={props.addBooking}>Confirmer la réservation</button>
          </div>
        </div>
      </div>
    </>
  );
}
