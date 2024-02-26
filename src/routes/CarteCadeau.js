import React, { useState, useEffect } from "react";
import "../stylesheets/CarteCadeau.css";

function CarteCadeau({ addToCart }) {
  const [recipient, setRecipient] = useState("");
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");
  const [prestation, setPrestation] = useState('');
  const [prestations, setPrestations] = useState([]);
  const [giftCardNumber, setGiftCardNumber] = useState(generateGiftCardNumber());
  const [validityDate, setValidityDate] = useState(generateValidityDate());

  useEffect(() => {
    const fetchPrestations = async () => {
      try {
        const response = await fetch(`http://10.125.24.52:5000/categories`);
        const json = await response.json();
        const allPrestations = json.map(category => category.prestations).flat();
        setPrestations(allPrestations);
      } catch (error) {
        console.error("Erreur lors de la récupération des prestations:", error);
      }
    };

    fetchPrestations();
  }, []);

  function generateGiftCardNumber() {
    return Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  }

  function generateValidityDate() {
    const today = new Date();
    const nextYear = new Date(today.setFullYear(today.getFullYear() + 1));
    return nextYear.toLocaleDateString('fr-FR');
  }

  function handleSubmit() {
    console.log({
      recipient,
      sender,
      message,
      prestation,
      giftCardNumber,
      validityDate
    });

    setGiftCardNumber(generateGiftCardNumber());
    setValidityDate(generateValidityDate());
  }

  return (
    <div className="gift-card">
      <h2>Un cadeau pour vous...</h2>
      <span>À l'attention de</span>
      <input
        type="text"
        placeholder="Prénom de votre destinataire..."
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <div className="sender-offer">
        <input
          type="text"
          placeholder="Votre prénom..."
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />
        <span>a le plaisir de vous offrir</span>
        <select
          value={prestation}
          onChange={(e) => setPrestation(e.target.value)}
        >
          {prestations.map((presta, index) => (
            <option key={index} value={presta.name}>
              {presta.name}
            </option>
          ))}
        </select>
      </div>
      <textarea
        placeholder="Votre message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>N° : {giftCardNumber}</p>
      <p>Date de validité : {validityDate}</p>
      <h3>
        Valable sur rendez-vous uniquement, du mardi au samedi de 10h à 19h30.
        <br />
        Veuillez respecter la date de validité de ce bon : il n'est ni échangeable, ni remboursable.
      </h3>
      <button onClick={handleSubmit}>Sauvegarder et ajouter au panier</button>
    </div>
  );
}

export default CarteCadeau;