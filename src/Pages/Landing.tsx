import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import HeaderMenu from "../Components/HeaderMenu";
import {Container, Row, Col, Card, CardColumns, Badge} from "react-bootstrap";
import api from "../Services/api";

// import '../styles/pages/landing.css';

// import logoImg from '../images/logo.svg';

interface Product {
    id: number;
    name: string;
    percentDiscount: number;
    defaultDisplayedPriceFormatted: number;
    priceOld: number;
    thumbnailUrl: string;
    url: string;
}

function Landing() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        api.get('https://feirinha-back.web.app/ecwid/listar/28820124?sortBy=DEFINED_BY_STORE_OWNER&category=51824438&limit=50').then(response => {
            setProducts(response.data);
        });
    }, []);
    return (
        <div id="page-landing">
            <HeaderMenu/>

            <Container fluid className="menu-top">
                <Row>

                </Row>
            </Container>
        </div>
    );
}

export default Landing;