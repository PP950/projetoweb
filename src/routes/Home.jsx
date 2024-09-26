import React, { useEffect, useState } from "react";
import { HomeStyle } from "../css/HomeStyle";
import '../css/home.css'


// Importando as imagens
import sport1 from '../assets/sport1.jpg'; 
import sport2 from '../assets/sport2.webp'; 
import Imagem1 from '../assets/imagem1.jpeg';
import Imagem2 from '../assets/imagem2.png';
import Imagem3 from '../assets/imagem3.webp';
import Imagem4 from '../assets/imagem4.webp';
import Imagem5 from '../assets/imagem5.jpeg';
import Imagem6 from '../assets/imagem6.jpg';
import Imagem7 from '../assets/imagem7.jpg';
import Imagem8 from '../assets/imagem8.jpg';
import Imagem9 from '../assets/imagem9.jpg';
import Imagem10 from '../assets/imagem10.jpg';
import Imagem11 from '../assets/imagem11.jpg';


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
          {/* Cards com produtos */}
         <main>
         <article className="produto-grid">

    <section className="produto-item span-row-2" >
    <img src={Imagem1} alt="Produto-1" id="image" />
    <div>
        <h3>Produto-1</h3>
        <p>R$ 100000,00</p>
    </div>
</section>

    <section className="produto-item ">
    <img src={Imagem2} alt="Produto-2" id="image" />
    <div>
        <h3>Produto-2</h3>
        <p>R$ 200000,00</p>
    </div>
</section>

    <section className="produto-item">
    <img src={Imagem3} alt="Produto-3" id="image" />
    <div>
        <h3>Produto-3</h3>
        <p>R$ 30000,00</p>
    </div>
</section>

    <section className="produto-item span-row-2">
    <img src={Imagem4} alt="Produto-4" id="image" />
    <div>
        <h3>Produto-4</h3>
        <p>R$ 39000,00</p>
    </div>
</section>

    <section className="produto-item span-row-2 span-col-2">
    <img src={Imagem5} alt="Produto-5" id="image" />
    <div>
        <h3>Produto-5</h3>
        <p>R$ 400000,00</p>
    </div>
</section>


<section className="produto-item">
    <img src={Imagem6} alt="Produto-6" id="image" />
    <div>
        <h3>Produto-6</h3>
        <p>R$ 1800000,00</p>
    </div>
</section>

<section className="produto-item">
    <img src={Imagem7} alt="Produto-7" id="image" />
    <div>
        <h3>Produto-7</h3>
        <p>R$ 650000,00</p>
    </div>
</section>

<section className="produto-item">
    <img src={Imagem8} alt="Produto-8" id="image" />
    <div>
        <h3>Produto-8</h3>
        <p>R$ 170000,00</p>
    </div>
</section>

<section className="produto-item">
    <img src={Imagem9} alt="Produto-9" id="image" />
    <div>
        <h3>Produto-9</h3>
        <p>R$ 800000,00</p>
    </div>
</section>

<section className="produto-item">
    <img src={Imagem10} alt="Produto-10" id="image" />
    <div>
        <h3>Produto-10</h3>
        <p>R$ 63000,00</p>
    </div>
</section>

<section className="produto-item">
    <img src={Imagem11} alt="Produto-11" id="image" />
    <div>
        <h3>Produto-11</h3>
        <p>R$ 54200,00</p>
    </div>
</section>

</article>
</main>            

</section>
        </HomeStyle>
    );
};

export default Home;
