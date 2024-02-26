import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import CarteCadeau from '../routes/CarteCadeau';
import Cart from '../components/Cart';
import '../stylesheets/App.css';

function App() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const getCategories = async () => {
    try {
      const response = await fetch(`http://10.125.24.52:5000/categories`);
      const json = await response.json();
      setCategories(json);
    } catch (error) {
      console.error("Erreur lors de la récupération des catégories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  return (
    <div className="App">
      <Carousel />

      <main>
        {categories.map((categorie, index) => (
          <div
            key={categorie._id}
            className={`container ${
              index % 2 === 0 ? "image-left" : "image-right"
            }`}
          >
            <div className="img-container">
              <img src={categorie.image} alt="" />
            </div>
            <div className="content">
              <h2>{categorie.name}</h2>
              <p>{categorie.description}</p>
              <div className="button-div">
                <button onClick={() => navigate(`/prestations#${categorie.name}`)}>
                  Découvrir
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      <CarteCadeau addToCart={addToCart} />
      <Cart items={cartItems} />
    </div>
  );
}

export default App;