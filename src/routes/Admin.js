import React, { useEffect, useRef, useState } from "react";
import ConfirmationMessage from "../components/ConfirmationMessage";
import Modal from "../components/Modal";

function Admin() {
  // States
  const [categories, setCategories] = useState([]);
  const [prestations, setPrestations] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [selectedPrestation, setSelectedPrestation] = useState({ name: "" });
  const [newPrestation, setNewPrestation] = useState({
    name: "",
    price: 0,
    time: 0,
    description: "",
    category: "",
  });
  const [confirmationMessage, setConfirmationMessage] = useState("");

  // Récupération des données
  const getCategories = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/categories`)
      .then((response) => response.json())
      .then((json) => {
        setCategories(json);
        setSelectedCategory(json[0]);
      });
  };

  const getPrestations = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/prestations`)
      .then((response) => response.json())
      .then((json) => {
        setPrestations(json);
        setSelectedPrestation(json[0]);
      });
  };

  useEffect(() => {
    getCategories();
    getPrestations();
  }, []);

  // Mettre à jour la catégorie
  const handleCategorySubmit = async (e) => {
    e.preventDefault();

    const updatedCategoryName = e.target.elements.name.value;
    const updatedCategoryDescription = e.target.elements.description.value;

    setSelectedCategory({
      ...selectedCategory,
      name: updatedCategoryName,
      description: updatedCategoryDescription,
    });

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/categories/${selectedCategory._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: updatedCategoryName,
            description: updatedCategoryDescription,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update category");
      }

      // Mettre à jour les catégories après la réussite de la requête
      getCategories();
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  // Mettre à jour la prestation
  const handlePrestationSubmit = async (e) => {
    e.preventDefault();

    const updatedPrestationName = e.target.elements.name.value;
    const updatedPrestationDescription = e.target.elements.description.value;
    const updatedPrestationPrice = e.target.elements.price.value;
    const updatedPrestationTime = e.target.elements.time.value;

    setSelectedPrestation({
      ...selectedPrestation,
      name: updatedPrestationName,
      price: updatedPrestationPrice,
      time: updatedPrestationTime,
      description: updatedPrestationDescription,
    });

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/prestations/${selectedPrestation._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: updatedPrestationName,
            price: updatedPrestationPrice,
            time: updatedPrestationTime,
            description: updatedPrestationDescription,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update prestation");
      }

      // Mettre à jour les catégories après la réussite de la requête
      getPrestations();
    } catch (error) {
      console.error("Error updating prestation:", error);
    }
  };

  //Ajouter une prestation
  const buttonOpen = useRef(null);
  const modalElement = useRef(null);

  const addPrestation = async (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const price = e.target.elements.price.value;
    const time = e.target.elements.time.value;
    const description = e.target.elements.description.value;
    const category = e.target.elements.category.value;

    setNewPrestation({
      name,
      price,
      time,
      description,
      category,
    });

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/prestations`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name,
            price,
            time,
            description,
            category,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Echec de l'ajout d'une nouvelle prestation");
      }

      // Mettre à jour les prestations après la réussite de la requête
      getPrestations();

      // Afficher le message de confirmation
      setConfirmationMessage("La prestation a été ajoutée avec succès");
    } catch (error) {
      console.error("Erreur de l'ajout :", error);
    }
    modalElement.current.style.display = "none";
  };

  const deletePrestation = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/prestations/${selectedPrestation._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete prestation");
      }

      getPrestations();
    } catch (error) {
      console.error("Error deleting prestation:", error);
    }
  };

  // Mettre à jour en fonction de la catégorie selectionné dans le select
  const handleChangeCategory = (e) => {
    const categoryId = e.target.value;
    const category = categories.find((cat) => cat._id === categoryId);

    setSelectedCategory(category);
  };

  // Mettre à jour en fonction de la prestation selectionné dans le select
  const handleChangePrestation = (e) => {
    const prestationId = e.target.value;
    const prestation = prestations.find((prest) => prest._id === prestationId);

    setSelectedPrestation(prestation);
  };

  // handleChange pour mettre à jour les states associés aux catégories
  const handleCategoryInputChange = (e, key) => {
    setSelectedCategory({
      ...selectedCategory,
      [key]: e.target.value,
    });
  };

  // handleChange pour mettre à jour les states associés aux prestations
  const handlePrestationInputChange = (e, key) => {
    setSelectedPrestation({
      ...selectedPrestation,
      [key]: e.target.value,
    });
  };

  return (
    <>
      {confirmationMessage && (
        <ConfirmationMessage message={confirmationMessage} />
      )}
      <main className="main-admin">
        <div className="col-droite">
          <form
            className="categories-container"
            onSubmit={handleCategorySubmit}
          >
            <div className="top">
              <h2>Catégorie</h2>
              <select name="" id="" onChange={handleChangeCategory}>
                {categories.map((categorie) => {
                  return (
                    <option key={categorie._id} value={categorie._id}>
                      {categorie.name}
                    </option>
                  );
                })}
              </select>
              <div className="container-inputs">
                <div className="categorie-inputs">
                  <label htmlFor="name">Nom de la catégorie</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Nom..."
                    value={selectedCategory.name}
                    onChange={(e) => handleCategoryInputChange(e, "name")}
                  />
                </div>
                <div className="categorie-inputs">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="5"
                    value={selectedCategory.description}
                    onChange={(e) =>
                      handleCategoryInputChange(e, "description")
                    }
                  >
                    {selectedCategory.description}
                  </textarea>
                </div>
              </div>
            </div>

            <div className="buttons-container">
              <div className="button-div bot">
                <button type="submit">Modifier</button>
              </div>
              <div className="button-div">
                <button type="submit" ref={buttonOpen}>
                  <p>Ajouter une prestation</p>
                </button>
              </div>
            </div>
          </form>

          <form
            className="prestations-container"
            onSubmit={handlePrestationSubmit}
          >
            <div className="top">
              <h2>Prestations</h2>
              <select name="" id="" onChange={handleChangePrestation}>
                {categories.map((categorie) => {
                  return categorie.prestations.map((prestation) => {
                    return (
                      <option key={prestation._id} value={prestation._id}>
                        {prestation.name}
                      </option>
                    );
                  });
                })}
              </select>
              <div className="container-inputs">
                <div className="prestations-inputs">
                  <label htmlFor="name-prestation">Nom de la prestation</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Nom..."
                    value={selectedPrestation.name}
                    onChange={(e) => handlePrestationInputChange(e, "name")}
                  />
                </div>
                <div className="prestations-inputs">
                  <label htmlFor="time">Durée en minutes</label>
                  <input
                    type="text"
                    id="time"
                    value={selectedPrestation.time}
                    onChange={(e) => handlePrestationInputChange(e, "time")}
                  />
                </div>
                <div className="prestations-inputs">
                  <label htmlFor="price">Prix en €</label>
                  <input
                    type="text"
                    id="price"
                    value={selectedPrestation.price}
                    onChange={(e) => handlePrestationInputChange(e, "price")}
                  />
                </div>
                <div className="prestations-inputs">
                  <label htmlFor="category">Appartient à la catégorie:</label>
                  <select
                    name="category"
                    id="category"
                    onChange={handleChangePrestation}
                  >
                    {/* <option value={selectedPrestation.category.name}>
                      {selectedPrestation.category.name}
                    </option> */}
                  </select>
                </div>
                <div className="prestations-inputs">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="5"
                    value={selectedPrestation.description}
                    onChange={(e) =>
                      handlePrestationInputChange(e, "description")
                    }
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="buttons-container">
              <div className="button-div update">
                <button type="submit">Modifier</button>
              </div>
              <div className="button-div add">
                <button type="submit" ref={buttonOpen}>
                  <p>Ajouter une prestation</p>
                </button>
              </div>
              <div className="button-div update">
                <button onClick={deletePrestation}>Supprimer</button>
              </div>
            </div>
          </form>
        </div>
        <div className="prestationModal" ref={modalElement}>
          <Modal
            addPrestation={addPrestation}
            buttonOpen={buttonOpen}
            modalElement={modalElement}
            categories={categories}
          />
        </div>
      </main>
    </>
  );
}

export default Admin;
