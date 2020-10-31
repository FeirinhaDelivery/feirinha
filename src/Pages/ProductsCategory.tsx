import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
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

interface ProductParams {
    slug: string;
    id: string;
}

function ProductsCategory() {
    const params = useParams<ProductParams>();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // &offset=0
        api.get(`products?category=${params.id}&limit=8&enabled=true&sortBy=NAME_ASC`)
            .then(response => {
                console.log(response.data.items)
                setProducts(response.data.items);
            });
    }, [params.id]);
    return (
        <div id="page-landing">
            <HeaderMenu/>

            <Container fluid className="menu-top pt-3">
                <Row>
                    <Col xs={2}><Sidebar active={params.id}/></Col>
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
                                                <Link to={"produto"+product.url.split("https://feirinha.delivery/#!")[1]} className="btn btn-outline-primary">
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
        </div>
    );
}

export default ProductsCategory;