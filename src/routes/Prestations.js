import { useEffect, useState } from "react";
import Header from "../components/Header";

function Prestations() {


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
    }, [])

    return (
        <>
            <Header />
            {categories.map(categorie => (
                <div key={categorie._id} className="categorie-container">
                    <h2>{categorie.name}</h2>
                    <p>{categorie.description}</p>
                    {categorie.prestations.map(prestation => (
                        <div className="prestations-container">
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
        </>
    )
}

export default Prestations;