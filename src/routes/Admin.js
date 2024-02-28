import React, { useEffect, useRef, useState } from "react";
import ConfirmationMessage from "../components/ConfirmationMessage";
import ModalCategory from "../components/ModalCategory";
import ModalPrestation from "../components/ModalPrestation";

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
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
    image: "",
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

  const buttonOpenPrest = useRef(null);
  const buttonOpenCat = useRef(null);
  const modalElementPrest = useRef(null);
  const modalElementCat = useRef(null);

  //CRUD CATEGORIES

  //Ajouter une catégorie
  const addCategory = async (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const description = e.target.elements.description.value;
    const image = e.target.elements.image.value;

    setNewCategory({
      name,
      description,
      image,
    });

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/categories`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name,
            description,
            image,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Echec de l'ajout d'une nouvelle catégorie");
      }

      getCategories();

      setConfirmationMessage("La catégorie à été ajoutée avec succès");
    } catch (error) {
      console.error("Erreur de l'ajout :", error);
    }
    modalElementCat.current.style.display = "none";
  };
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

  // Supprimer une catégorie
  const deleteCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/categories/${selectedCategory._id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Echec de la suppression de la catégorie");
      }
      getCategories();
    } catch (error) {
      console.error("Erreur lors de la suppression de la catégorie:", error);
    }
  };

  // Mettre à jour en fonction de la catégorie selectionné dans le select
  const handleChangeCategory = (e) => {
    const categoryId = e.target.value;
    const category = categories.find((cat) => cat._id === categoryId);
    setSelectedCategory(category);
  };

  // handleChange pour mettre à jour les states associés aux catégories
  const handleCategoryInputChange = (e, key) => {
    setSelectedCategory({
      ...selectedCategory,
      [key]: e.target.value,
    });
  };

  //CRUD PRESTATIONS
  //Ajouter une prestation
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
    modalElementPrest.current.style.display = "none";
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

      // Mettre à jour les prestations après la réussite de la requête
      getPrestations();
    } catch (error) {
      console.error("Error updating prestation:", error);
    }
  };
  // Supprimer prestation
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

  // Mettre à jour en fonction de la prestation selectionné dans le select
  const handleChangePrestation = (e) => {
    const prestationId = e.target.value;
    const prestation = prestations.find((prest) => prest._id === prestationId);

    setSelectedPrestation(prestation);
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
              <div className="button-div update">
                <button type="submit">Modifier</button>
              </div>
              <div className="button-div add">
                <a href ref={buttonOpenCat}>
                  Ajouter une catégorie
                </a>
              </div>
              <div className="button-div delete">
                <a href onClick={deleteCategory}>
                  Supprimer
                </a>
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
                {prestations.map((prestation) => {
                  return (
                    <option value={prestation._id}>{prestation.name}</option>
                  );
                })}
              </select>
              <div className="container-inputs">
                <div className="prestations-inputs">
                  <label htmlFor="name-prestation">Nom de la prestation</label>
                  <input
                    type="text"
                    id="name-prestation"
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
                  <select name="category" id="category">
                    {categories.map((category) => {
                      return (
                        <option value={category._id}>{category.name}</option>
                      );
                    })}
                  </select>
                </div>
                <div className="prestations-inputs">
                  <label htmlFor="description-prestation">Description</label>
                  <textarea
                    name="description-prestation"
                    id="description-prestation"
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
                <a href ref={buttonOpenPrest}>
                  Ajouter une prestation
                </a>
              </div>
              <div className="button-div delete">
                <a href onClick={deletePrestation}>
                  Supprimer
                </a>
              </div>
            </div>
          </form>
        </div>
        <div className="prestationModal" ref={modalElementPrest}>
          <ModalPrestation
            addPrestation={addPrestation}
            buttonOpen={buttonOpenPrest}
            modalElement={modalElementPrest}
            categories={categories}
          />
        </div>
        <div className="categoryModal" ref={modalElementCat}>
          <ModalCategory
            addCategory={addCategory}
            buttonOpen={buttonOpenCat}
            modalElement={modalElementCat}
            categories={categories}
          />
        </div>
      </main>
    </>
  );
}

export default Admin;
