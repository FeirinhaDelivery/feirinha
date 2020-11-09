import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Slider from '../../components/slider/Slider';

import './Landing.css';

import bannerImg from '../../images/banner-landing.svg';
import ofertasImg from '../../images/discount.svg';
import combosImg from '../../images/combo.svg';
import frutasImg from '../../images/fruit.svg';
import legumesImg from '../../images/veg.svg';
import verdurasImg from '../../images/salad.svg';
import diversosImg from '../../images/others.svg';
import saladImg from '../../images/unnamed.svg';
import tomateImg from '../../images/tomate-pizzadoro.svg';

function Landing() {
    return (
        <div className="landing-page">
            <Navbar />

            <div className="banner">
                <img src={bannerImg} alt="banner" className="bannerImg" />
            </div>

            <div className="categories">

                <button className="ofertas" >
                    <img src={ofertasImg} alt="Ofertas" />
                    <span className="text">Ofertas</span>
                </button>

                <button className="combos">
                    <img src={combosImg} alt="Combos" />
                    <span className="text">Combos</span>
                </button>

                <button className="frutas">
                    <img src={frutasImg} alt="Frutas" />
                    <span className="text">Frutas</span>
                </button>

                <button className="legumes">
                    <img src={legumesImg} alt="Legumes" />
                    <span className="text">Legumes</span>
                </button>

                <button className="verduras">
                    <img src={verdurasImg} alt="Verduras" />
                    <span className="text">Verduras</span>
                </button>

                <button className="diversos">
                    <img src={diversosImg} alt="Diversos" />
                    <span className="text">Diversos</span>
                </button>
            </div>

            <Slider tittle="Ofertas de hoje" img={saladImg}/>
            <Slider tittle="Verduras" img={tomateImg}/>
        </div>
    );
}

export default Landing;