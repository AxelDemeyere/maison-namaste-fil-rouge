import { useEffect, useState } from "react";
import Header from "../components/Header";

function Prestations() {

    const [prestations, setPrestations] = useState([]);
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        await fetch(`http://192.168.1.59:5000/categories`)
            .then(response => response.json())
            .then(json => {
                setCategories(json);
                console.log(json);
            })
    }

    const getPrestations = async () => {
        await fetch(`http://192.168.1.59:5000/prestations`)
            .then(response => response.json())
            .then(json => {
                setPrestations(json);
                console.log(json);
            });
    }

    useEffect(() => {
        getCategories();
        getPrestations();
    }, [])

    return (
        <>
            <Header />
            <div className="prestations-container">
                {prestations.map(prestation => (

                    <div className="prestation">
                        <p>{prestation.name}</p>
                        <div className="prestation-infos">
                            <span>{prestation.price}€</span><span>{prestation.time}min</span>
                            <div className="button-div">
                                <button>Ajouter</button>
                                </div>
                            
                        </div>
                        
                    </div>

                ))}
            </div>
        </>
    )
}

export default Prestations;