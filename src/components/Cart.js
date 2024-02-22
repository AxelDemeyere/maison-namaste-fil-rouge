import React from "react";

function Cart({ prestations = [], total, removeFromCart, time }) {
  const listPrestations = prestations.map((prestation) => {
    return (
      <>
        <div className="prestation" key={prestation._id}>
          <button onClick={() => removeFromCart(prestation._id)}>-</button>
          <p>{prestation.name}</p>
        </div>
      </>
    );
  });

  // Ne pas faire apparaître le bontou si cart est vide
  function displayButton() {
    if (prestations.length > 0) {
      return (
        <div className="button-div">
          <button>Valider le panier</button>
        </div>
      );
    } else {
      return (
        <p className="panier-vide">
          Il n'y a aucune prestation dans votre panier !
        </p>
      );
    }
  }

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

export default Cart;
