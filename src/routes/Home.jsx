import React, { useEffect, useState } from "react";
import { HomeStyle } from "../css/HomeStyle";


// Importando as imagens
import sport1 from '../assets/sport1.jpg'; 
import sport2 from '../assets/sport2.webp'; 


const Home = () => {
    // Estado para controlar o índice da imagem do slideshow
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [sport1, sport2]; // Array com as imagens

    // Efeito para alternar as imagens do slideshow a cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Troca a imagem a cada 3 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, [images.length]);

    return (
        <HomeStyle>
        <section className="home">
            <h1>Bem-vindo à Nossa Loja de Esportes</h1>
            <p>
                Transforme a sua experiência de condução com
                a sustentabilidade e inovação! Nossa loja é dedicada
                a oferecer uma ampla gama de veículos elétricos de alta performance,
                que combinam eficiência, conforto e respeito ao meio ambiente.
            </p>

            {/* Slideshow de Imagens */}
            <div className="slideshow">
                <img src={images[currentImageIndex]} alt={`Esporte ${currentImageIndex + 1} `}/>
            </div>
        </section>
        </HomeStyle>
    );
};

export default Home;
