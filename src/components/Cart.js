import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Cart({ prestations = [], total, removeFromCart, time }) {
  const [currentCart, setCurrentCart] = useState({});
  const [isPrest, setIsPrest] = useState(false);

  useEffect(() => {
    setCurrentCart({
      prestations: prestations,
      time: time,
      total: total,
    });
  }, [prestations, time, total]);

  const location = useLocation();

  const listPrestations = prestations.map((prestation) => {
    if (location.pathname === "/rendez-vous") {
      return (
        <div className="prestation" key={prestation._id}>
          <p>{prestation.name}</p>
        </div>
      );
    }
    return (
      <div className="prestation" key={prestation._id}>
        <button onClick={() => removeFromCart(prestation._id)}>-</button>
        <p>{prestation.name}</p>
      </div>
    );
  });

  function displayButton() {
    if (prestations.length > 0) {
      return (
        <div className="button-div">
          <Link to={"/rendez-vous"} state={currentCart}>
            <button>Valider le panier</button>
          </Link>
        </div>
      );
    } else {
      return (
        <p className="panier-vide-cart">
          Il n'y a aucune prestation dans votre panier !
        </p>
      );
    }
  }

  if (location.pathname === "/rendez-vous") {
    return (
      <div className="cart">
        <h2>Vos prestations</h2>
        <div className="prestations-container">
          <div className="prestations-list">{listPrestations}</div>
          <div className="prestations-total">
            {time}
            <p> minutes</p>
            <p>Total : </p>
            {total}€
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <h2>Vos prestations</h2>
        <div className="prestations-container">
          <div className="prestations-list">{listPrestations}</div>
          <div className="prestations-total">
            {time}
            <p> minutes</p>
            <p>Total : </p>
            {total}€
          </div>
        </div>

        {displayButton()}
      </div>
    );
  }
}

export default Cart;
