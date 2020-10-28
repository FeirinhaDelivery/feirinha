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
                    <Col xs={2}>1 of 3</Col>
                    <Col xs={10}>
                        <CardColumns>

                            {products.map(product => {
                                return (
                                    <Card style={{width: '18rem'}} key={product.id}>
                                        <Card.Img variant="top" src={product.thumbnailUrl}/>
                                        <Card.Body>
                                            <Card.Title className="product_title text-center">{product.name}</Card.Title>
                                            <Card.Text className={'product'}>
                                                {product.priceOld ?
                                                    <div className={'price_old'}>
                                                        {product.priceOld} <small className={'mr-3'}>Kg</small>
                                                    </div>
                                                    :
                                                    ''
                                                }
                                                <div className={'price'}>
                                                {product.defaultDisplayedPriceFormatted} <small>Kg</small>
                                                </div>
                                            </Card.Text>
                                            <div className="text-center">
                                                <Link to="/" className="btn btn-outline-primary">
                                                    Adicionar
                                                </Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                )
                            })}
                        </CardColumns>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Landing;