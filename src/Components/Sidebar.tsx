import React from "react";
import {ListGroup} from "react-bootstrap";
import {Link} from 'react-router-dom';

import icoOfertas from '../Images/icon-oferta.svg';
import icoVerduras from '../Images/icon-verduras.svg';
import icoFrutas from '../Images/icon-frutas.svg';
import icoLegumes from '../Images/icon-legumes.svg';
import icoCombos from '../Images/icon-combos.svg';
import icoDiversos from '../Images/icon-diversos.svg';

import '../Styles/components/sidebar.css';

// <Link to="/" className="nav-link">
//     Home
// </Link>
export default function Sidebar() {
    return (
        <ListGroup variant="flush" className={'sidebar'}>
            <Link to="/" >
                <ListGroup.Item className="active">
                    <img src={icoOfertas} alt=""/>
                    Ofertas

                </ListGroup.Item>
            </Link>
            <Link to="/" className="">
                <ListGroup.Item>
                    <img src={icoVerduras} alt=""/>
                    Verduras

                </ListGroup.Item>
            </Link>
            <Link to="/" className="">
                <ListGroup.Item>
                    <img src={icoFrutas} alt=""/>
                    Frutas

                </ListGroup.Item>
            </Link>
            <Link to="/" className="">
                <ListGroup.Item>
                    <img src={icoLegumes} alt=""/>
                    Legumes

                </ListGroup.Item>
            </Link>
            <Link to="/" className="">
                <ListGroup.Item>
                    <img src={icoCombos} alt=""/>
                    Combos

                </ListGroup.Item>
            </Link>
            <Link to="/" className="">
                <ListGroup.Item>
                    <img src={icoDiversos} alt=""/>
                    Diversos

                </ListGroup.Item>
            </Link>

        </ListGroup>
    );
}