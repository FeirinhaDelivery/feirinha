import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import HeaderMenu from "../Components/HeaderMenu";
import Sidebar from "../Components/Sidebar";
import {Container, Row, Col, Card, CardColumns, Pagination} from "react-bootstrap";
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

function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    function loadItems(page: number) {
        console.log(page)
        let url = 'products?limit=8&offset=' + page + '&enabled=true&sortBy=NAME_ASC'
        api.get(url)
            .then(response => {
                setProducts(response.data.items);
            });
    }

    useEffect(() => {
        loadItems(10)
    }, []);
    return (
        <Container fluid className="menu-top pt-3">
            <Row>
                <Col xs={2}><Sidebar active={'n'}/></Col>
                <Col xs={10}>
                    <CardColumns>
                        {products.map(product => {
                            return (
                                <Card key={product.id}>
                                    <Card.Img variant="top" src={product.thumbnailUrl}/>
                                    <Card.Body>
                                        <Card.Title
                                            className="product_title text-center">{product.name}</Card.Title>
                                        <Card.Text className={'product'}>
                                            {product.priceOld ?
                                                <span className={'price_old'}>
                                                        {product.priceOld} <small className={'mr-3'}>Kg</small>
                                                    </span>
                                                :
                                                ''
                                            }
                                            <span className={'price'}>
                                                    {product.defaultDisplayedPriceFormatted} <small>Kg</small>
                                                </span>
                                        </Card.Text>
                                        <div className="text-center">
                                            <Link to={"produto" + product.url.split("https://feirinha.delivery/#!")[1]}
                                                  className="btn btn-outline-primary">
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
            <Row>
                <Col>
                    <Pagination size="sm"></Pagination>
                </Col>
            </Row>
        </Container>
    );
}

export default Products;