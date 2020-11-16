import React from 'react';
import Slider from '../Components/Slider';
import Banner from '../Components/Banner';
import Sidebar from '../Components/Sidebar';

function Landing() {
    return (
        <div className="landing-page mb-5">
            <Banner/>
            <Sidebar active={false} horizontal={true}/>

            <Slider tittle="Ofertas de hoje" offer={true} category={0} stylePessoal={"Ofertas"} urlCategory={"/produtos/Ofertas/10/0/0"}/>
            <Slider tittle="Verduras" offer={false} category={51827393} stylePessoal={"Verduras"} urlCategory={"/produtos/Verduras/10/0/0"}/>
            <Slider tittle="Frutas" offer={false} category={51814491} stylePessoal={"Frutas"} urlCategory={"/produtos/Frutas/10/0/0"}/>
            <Slider tittle="Legumes" offer={false} category={51824438} stylePessoal={"Legumes"} urlCategory={"/produtos/Legumes/10/0/0"}/>
            <Slider tittle="Diversos" offer={false} category={51814492} stylePessoal={"Diversos"} urlCategory={"/produtos/Diversos/10/0/0"}/>
        </div>
    );
}

export default Landing;