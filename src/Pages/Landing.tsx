import React from 'react';
import Slider from '../Components/Slider';
import Banner from '../Components/Banner';
import Sidebar from '../Components/Sidebar';

function Landing() {
    return (
        <div className="landing-page">
            <Banner/>
            <Sidebar active={false} horizontal={true}/>

            <Slider tittle="Ofertas de hoje" offer={true} category={0} stylePessoal={"Ofertas"}/>
            <Slider tittle="Verduras" offer={false} category={51827393} stylePessoal={"Verduras"}/>
            <Slider tittle="Frutas" offer={false} category={51814491} stylePessoal={"Frutas"}/>
            <Slider tittle="Legumes" offer={false} category={51824438} stylePessoal={"Legumes"}/>
            <Slider tittle="Diversos" offer={false} category={51814492} stylePessoal={"Diversos"}/>
        </div>
    );
}

export default Landing;