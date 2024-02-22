import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import SearchBar from "../components/SearchBar";

function Prestations() {
  // Definir les states
  const [categories, setCategories] = useState({
    filtered: [],
    list: [],
  });
  const [fixedColumn, setFixedColumn] = useState(false);

  //Appel API
  const getCategories = async () => {
    await fetch(`http://10.125.24.52:5000/categories`)
      .then((response) => response.json())
      .then((json) => {
        setCategories({
          filtered: json,
          list: json,
        });
      });
  };

  useEffect(() => {
    getCategories();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Definir à quelle hauteur la navbar va translate
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 340;

    if (scrollPosition > threshold) {
      setFixedColumn(true);
    } else {
      setFixedColumn(false);
    }
  };

  // State du panier
  const [cart, setCart] = useState({
    prestations: [],
    time: 0,
    total: 0,
  });

  //Ajouter prestation au panier
  const addToCart = (prestation) => {
    const newPrestation = [...cart.prestations, prestation];
    const newTotal = cart.total + prestation.price;
    const newTime = cart.time + prestation.time;
    setCart({
      prestations: newPrestation,
      total: Math.round(newTotal * 100) / 100,
      time: newTime,
    });
  };

  //Retirer une prestation du panier
  const removeFromCart = (id) => {
    const updatedPrestations = cart.prestations.filter(
      (prestation) => prestation._id !== id
    );
    const updatedTotal = updatedPrestations.reduce(
      (acc, curr) => acc + curr.price,
      0
    );
    const updatedTime = updatedPrestations.reduce(
      (acc, curr) => acc + curr.time,
      0
    );

    setCart({
      prestations: updatedPrestations,
      total: Math.round(updatedTotal * 100) / 100,
      time: Math.round(updatedTime),
    });
  };

  return (
    <>
      <Cart
        prestations={cart.prestations}
        total={cart.total}
        time={cart.time}
        removeFromCart={removeFromCart}
      />
      <div className="main-categories">
        <nav className={`col-gauche ${fixedColumn ? "fixed" : ""}`}>
          <div className="nav-list">
            {categories.filtered.map((categorie) => (
              <a
                key={categorie._id}
                className="nav-item"
                href={`#${categorie.name}`}
              >
                {categorie.name}
              </a>
            ))}
          </div>
        </nav>
        <div className={`col-droite ${fixedColumn ? "fixed" : ""}`}>
          <SearchBar categories={categories} setCategories={setCategories} />
          {categories.filtered.map((categorie) => (
            <div
              key={categorie._id}
              className="categorie-container"
              id={categorie.name}
            >
              <div className="header-categories">
                <h2>{categorie.name}</h2>
                <p>{categorie.description}</p>
              </div>
              {categorie.prestations.map((prestation) => (
                <div className="prestations-container" key={prestation._id}>
                  <div className="prestation">
                    <p>{prestation.name}</p>
                    <div className="prestation-infos">
                      <div className="infos-div">
                        <span>{prestation.price}€</span>
                        <span>{prestation.time}min</span>
                      </div>
                      <div className="button-div">
                        <button onClick={() => addToCart(prestation)}>
                          Ajouter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Prestations;
