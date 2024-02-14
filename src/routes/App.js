import Carousel from '../components/Carousel';
import SearchBar from '../components/SearchBar';
import '../stylesheets/App.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function App() {

  const navigate = useNavigate()

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    await fetch(`http://10.125.24.52:5000/categories`)
      .then(response => response.json())
      .then(json => {
        setCategories(json);
      })
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="App">
      <Carousel />
      <SearchBar />

      <main>
        {categories.map((categorie, index) => (
          <div key={categorie._id} className={`container ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
            <div className='img-container' >
              <img src={categorie.image} />
            </div>
            <div className="content">
              <h2>{categorie.name}</h2>
              <p>{categorie.description}</p>
              <div className="button-div">
                <button onClick={() => navigate(`/prestations#${categorie.name}`)}>Découvrir</button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
