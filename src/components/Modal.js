import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function Modal(props) {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    await fetch(`http://10.125.24.52:5000/categories`)
      .then((response) => response.json())
      .then((json) => {
        setCategories(json);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

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
    <div className="modal">
      <FontAwesomeIcon className="btn-close" icon={faXmark} onClick={close} />
      <form
        onSubmit={(e) => props.addPrestation(e)}
        className="modal-prestations-container"
      >
        <h1>Ajouter une prestation</h1>

        <div className="modal-container-inputs">
          <div className="modal-prestations-inputs">
            <label htmlFor="name-prestation">Nom de la prestation</label>
            <input type="text" id="name" placeholder="Nom..." />
          </div>
          <div className="modal-prestations-inputs">
            <label htmlFor="time">Durée en minutes</label>
            <input type="number" id="time" name="time" />
          </div>
          <div className="modal-prestations-inputs">
            <label htmlFor="price">Prix en €</label>
            <input type="number" id="price" />
          </div>
          <div className="modal-prestations-inputs">
            <label htmlFor="category">Appartient à la catégorie:</label>
            <select name="category" id="category">
              {categories.map((category) => {
                return (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="modal-prestations-inputs">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
          ></textarea>
        </div>

        <div className="buttons-container submit">
          <div className="button-div update">
            <button type="submit">Créer</button>
          </div>
        </div>
      </form>
    </div>
  );
}
