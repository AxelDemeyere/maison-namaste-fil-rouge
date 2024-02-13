import { useEffect, useState } from "react";

function Prestations() {
    const [categories, setCategories] = useState([]);
    const [fixedColumn, setFixedColumn] = useState(false);

    const getCategories = async () => {
        await fetch(`http://10.125.24.52:5000/categories`)
            .then(response => response.json())
            .then(json => {
                setCategories(json);
            })
    }

    useEffect(() => {
        getCategories();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = 340;

        if (scrollPosition > threshold) {
            setFixedColumn(true);
        } else {
            setFixedColumn(false);
        }
    };

    return (
        <>
            <div className="main-categories">
                <nav className={`col-gauche ${fixedColumn ? 'fixed' : ''}`}>

                    <div className="nav-list">
                        {categories.map(categorie => (
                            <a className="nav-item" href={`#${categorie.name}`}>{categorie.name}</a>
                        ))}

                    </div>
                </nav>
                <div className={`col-droite ${fixedColumn ? 'fixed' : ''}`}>
                    {categories.map(categorie => (
                        <div key={categorie._id} className="categorie-container" id={categorie.name}>
                            <h2>{categorie.name}</h2>
                            <p>{categorie.description}</p>
                            {categorie.prestations.map(prestation => (
                                <div className="prestations-container" key={prestation._id}>
                                    <div className="prestation">
                                        <p>{prestation.name}</p>
                                        <div className="prestation-infos">
                                            <div className="infos-div">
                                                <span>{prestation.price}€</span>
                                                <span>{prestation.time}min</span>
                                            </div>
                                            <div className="button-div">
                                                <button>Ajouter</button>
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
    )
}

export default Prestations;
