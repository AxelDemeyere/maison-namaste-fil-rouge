import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function ModalCategory(props) {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/categories`)
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
        onSubmit={(e) => props.addCategory(e)}
        className="modal-prestations-container"
      >
        <h1>Ajouter une catégorie</h1>

        <div className="modal-container-inputs">
          <div className="modal-categories-inputs">
            <label htmlFor="name-category">Nom de la catégorie</label>
            <input type="text" id="name" placeholder="Nom..." />
          </div>

          <div className="modal-categories-inputs">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="modal-categories-inputs">
            <label htmlFor="image">Lien de l'image</label>
            <input type="text" name="image" />
          </div>
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
