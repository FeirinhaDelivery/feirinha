import React from 'react';
import { Link } from 'react-router-dom';
import HeaderMenu from "../Components/HeaderMenu";

// import '../styles/pages/landing.css';

// import logoImg from '../images/logo.svg';

function Landing() {
    return (
        <div id="page-landing">
            <HeaderMenu />
            <div className="content-wrapper">
                {/*<img src={logoImg} alt="Happy" />*/}

                <main>
                    <h1>Compre</h1>
                </main>

                <div className="location">
                    <strong>Foz do Iguaçu</strong>
                    <span>Paraná</span>
                </div>

                <Link to="/app" className="enter-app">
                    {/*<FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />*/}
                </Link>
            </div>
        </div>
    );
}

export default Landing;