import { useEffect, useState } from "react";
import Header from "../components/Header";
import { PresetStatusColorTypes } from "antd/es/_util/colors";



function Prestations() {

    const [prestations, setPrestations] = useState([]);

    const getPrestations = async() => {
        await fetch(`http://192.168.1.59:5000/prestations`)
        .then(response => response.json())
        .then(json => {
            setPrestations(json);
            console.log(json);
        });
    }

    useEffect(() => {
        getPrestations();
    }, [])

    return (
        <>
            <Header />
            
            <div>
                <h2>épilations femme</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ex rerum, necessitatibus in, voluptatum fuga doloremque quidem recusandae quam quaerat facere aspernatur. Maxime accusantium similique, nostrum officiis voluptatibus omnis dolorum.</p>
                <p>{prestations.name}</p>
            </div>
        </>
    )
}

export default Prestations;