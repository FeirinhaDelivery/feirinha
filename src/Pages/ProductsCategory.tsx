import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Sidebar from "../Components/Sidebar";
import {Container, Row, Col, CardColumns, Alert} from "react-bootstrap";
import api from "../Services/api";
import CardsItens from "../Utils/CardsItens";
import Pages from "../Components/Pages";


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
    limit: string;
    offset: string;
    page: string;
}

interface ProParams {
    total: string;
    limit: string;
    offset: string;
}

function ProductsCategory() {
    const params = useParams<ProductParams>();
    const [products, setProducts] = useState<Product[]>([]);
    const [proParams, setProParams] = useState<ProParams>();


    useEffect(() => {
        // &offset=0
        api.get(`products?category=${params.id}&limit=${params.limit}&offset=${params.offset}&enabled=true&sortBy=NAME_ASC`)
            .then(response => {
                setProducts(response.data.items);
                setProParams(response.data);
            });
    }, [params.id, params.limit, params.offset]);
    return (
        <Container fluid className="menu-top pt-3">
            <Row>
                <Col xs={12} md={2}><Sidebar active={params.id} horizontal={false}/></Col>
                <Col xs={12} md={10}>
                    <CardColumns>
                        {(Object.entries(products).length > 0) ?
                            products.map(product => {
                                return (
                                    <CardsItens key={product.id} id={product.id} thumbnailUrl={product.thumbnailUrl}
                                                name={product.name} priceOld={product.priceOld}
                                                defaultDisplayedPriceFormatted={product.defaultDisplayedPriceFormatted}/>
                                )
                        }) : ''}
                    </CardColumns>
                    {(Object.entries(products).length < 1) ?
                        <Alert variant="secondary" style={{ width: '32rem' }}>
                            <p>Desculpe, no momento esta categoria ainda não tem
                            produtos!</p>
                        </Alert>
                    : ''}
                </Col>
            </Row>
            <Row>
                <Col xs={{span: 10, offset: 2}} className={'d-flex justify-content-center'}>
                    <Pages total={proParams || {}} page={params.page}/>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductsCategory;