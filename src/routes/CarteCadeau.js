import React, { useState } from "react";
import "../stylesheets/CarteCadeau.css";

function CarteCadeau() {
  const [recipient, setRecipient] = useState("");
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");
  const [prestation, setPrestation] = useState('');
  const [giftCardNumber, setGiftCardNumber] = useState(generateGiftCardNumber());

  function generateGiftCardNumber() {
    return Math.floor(Math.random() * 100000).toString().padStart(6, '0');
  }

  function handleSubmit() {
    console.log({ recipient, sender, message, giftCardNumber });
    setGiftCardNumber(generateGiftCardNumber());
  }

  const prestationsList = [
    "Soin du visage essentiel de 30 minutes",
    "Massage relaxant de 60 minutes",
    "Manucure complète",
  ];

  return (
    <div className="gift-card">
      <h2>À l'attention de</h2>
      <input
        type="text"
        placeholder="Nom du destinataire"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />

      <div className="sender-offer">
        <input
          type="text"
          placeholder="Votre prénom"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />
        <span>a le plaisir de vous offrir</span>
        <select
          value={prestation}
          onChange={(e) => setPrestation(e.target.value)}
        >
          {prestationsList.map((presta, index) => (
            <option key={index} value={presta}>
              {presta}
            </option>
          ))}
        </select>
      </div>

      <textarea
        placeholder="Votre message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    
      <p>N° : {giftCardNumber}</p>
      <button onClick={handleSubmit}>Sauvegarder et ajouter au panier</button>
    </div>
  );
}

export default CarteCadeau;
