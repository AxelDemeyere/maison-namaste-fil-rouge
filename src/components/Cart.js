import React from "react";

function Cart({ prestations = [], giftCards = [], total, removeFromCart }) {
  const listPrestations = prestations.map((prestation) => (
    <div className="prestation" key={prestation._id}>
      <button onClick={() => removeFromCart(prestation._id)}>-</button>
      <p>{prestation.name}</p>
    </div>
  ));

  const listGiftCards = giftCards.map((giftCard, index) => (
    <div className="gift-card" key={index}>
      <p>Destinataire : {giftCard.recipient}</p>
      <p>Expéditeur : {giftCard.sender}</p>
      <p>Message : {giftCard.message}</p>
      <p>Prestation : {giftCard.prestation}</p>
      <p>Numéro du bon : {giftCard.giftCardNumber}</p>
      <p>Date de validité : {giftCard.validityDate}</p>
    </div>
  ));

  // Ne pas faire apparaître le bouton si cart est vide
  function displayButton() {
    if (prestations.length > 0 || giftCards.length > 0) {
      return (
        <div className="button-div">
          <button>Valider le panier</button>
        </div>
      );
    } else {
      return <p className="panier-vide">Il n'y a aucune prestation dans votre panier !</p>;
    }
  }

  return (
    <div className="cart">
      <h2>Vos prestations</h2>
      <div className="prestations-container">
        <div className="prestations-list">{listPrestations}</div>
        {listGiftCards}
        <div className="prestations-total">
          <p>Total : </p>
          {total}€
        </div>
      </div>
      {displayButton()}
    </div>
  );
}

export default Cart;