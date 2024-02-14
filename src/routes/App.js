import Carousel from '../components/Carousel';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Modal from '../components/Modal';
import '../stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <SearchBar />
      <Modal />
    </div> 
  );
}

export default App;
