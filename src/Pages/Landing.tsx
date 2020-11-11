import React from 'react';
import Slider from '../Components/Slider';
import Banner from '../Components/Banner';
import Sidebar from '../Components/Sidebar';

import saladImg from '../Images/unnamed.svg';
import tomateImg from '../Images/tomate-pizzadoro.svg';

function Landing() {
    return (
        <div className="landing-page">
            <Banner/>
            <Sidebar active={false} horizontal={true}/>

            {/*<div className="categories">*/}

            {/*    <button className="ofertas">*/}
            {/*        <img src={ofertasImg} alt="Ofertas"/>*/}
            {/*        <span className="text">Ofertas</span>*/}
            {/*    </button>*/}

            {/*    <button className="combos">*/}
            {/*        <img src={combosImg} alt="Combos"/>*/}
            {/*        <span className="text">Combos</span>*/}
            {/*    </button>*/}

            {/*    <button className="frutas">*/}
            {/*        <img src={frutasImg} alt="Frutas"/>*/}
            {/*        <span className="text">Frutas</span>*/}
            {/*    </button>*/}

            {/*    <button className="legumes">*/}
            {/*        <img src={legumesImg} alt="Legumes"/>*/}
            {/*        <span className="text">Legumes</span>*/}
            {/*    </button>*/}

            {/*    <button className="verduras">*/}
            {/*        <img src={verdurasImg} alt="Verduras"/>*/}
            {/*        <span className="text">Verduras</span>*/}
            {/*    </button>*/}

            {/*    <button className="diversos">*/}
            {/*        <img src={diversosImg} alt="Diversos"/>*/}
            {/*        <span className="text">Diversos</span>*/}
            {/*    </button>*/}
            {/*</div>*/}

            <Slider tittle="Ofertas de hoje" img={saladImg}/>
            <Slider tittle="Verduras" img={tomateImg}/>
        </div>
    );
}

export default Landing;