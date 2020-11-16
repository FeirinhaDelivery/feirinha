import React, {useEffect, useState} from 'react';
import Sidebar from "../Components/Sidebar";
import {Container, Row, Col, CardColumns, Pagination, CardGroup} from "react-bootstrap";
import api from "../Services/api";
import CardsItens from "../Utils/CardsItens";

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
        let url = 'products?limit=10&offset=' + page + '&enabled=true&sortBy=NAME_ASC'
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
                <Col xs={12} md={2}><Sidebar active={false} horizontal={false}/></Col>
                <Col xs={12} md={10}>
                    <CardGroup>
                        {products.map(product => {
                            return (
                                <CardsItens key={product.id} id={product.id} thumbnailUrl={product.thumbnailUrl}
                                            name={product.name} priceOld={product.priceOld}
                                            defaultDisplayedPriceFormatted={product.defaultDisplayedPriceFormatted}/>

                            )
                        })}
                    </CardGroup>
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