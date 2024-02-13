import Carousel from '../components/Carousel';
import SearchBar from '../components/SearchBar';
import '../stylesheets/App.css';
import epilF from '../img/épilation.webp'
import main from '../img/mains-pieds.jpg'
import regard from '../img/cil.webp'
import soinV from '../img/66-large.jpg'
import soinC from '../img/massage.jpg'
import epilH from '../img/épilation.webp'
import { useEffect, useState } from 'react';


function App() {

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
          <div key={categorie._id} className={`container ${index % 2 === 0 ? '' : 'image-right'}`}>
            <div className='img-container' >
              <img src={categorie.image} />
            </div>
            <div className="content">
              <h2>{categorie.name}</h2>
              <p>
                {categorie.description}
              </p>
              <div className="button-div">
                <button>Découvrir</button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
