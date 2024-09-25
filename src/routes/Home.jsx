import React from "react";
import { Link } from "react-router-dom";

// Importando as imagens
import sport1 from "/images/sport1.jpg"; 
import sport2 from "/images/sport2.jpg"; 
import produto1 from "/images/produto1.jpg"; 
import produto2 from "/images/produto2.jpg"; 

const Home=()=>{
    return(
        <>
         <section className="home">
            <h1>Bem-vindo à Nossa Loja de Esportes</h1>
            {/* Slideshow de Imagens */}
            <div className="slideshow">
                <img src={sport1} alt="Esporte 1" />
                <img src={sport2} alt="Esporte 2" />
               
            </div>

            {/* Cards com produtos */}
            <div className="cards">
                <div className="card">
                    <img src={produto1} alt="Produto 1" />
                    <p>Produto 1 - R$100,00</p>
                </div>
                <div className="card">
                    <img src={produto2} alt="Produto 2" />
                    <p>Produto 2 - R$150,00</p>
                </div>
                
            </div>
        </section>
        </>
    )
}
export default Home