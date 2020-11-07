import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import HeaderMenu from "../Components/HeaderMenu";
import Sidebar from "../Components/Sidebar";
import {Container, Row, Col, CardColumns} from "react-bootstrap";
import api from "../Services/api";
import CardsItens from "../Utils/CardsItens";
import Pages from "../Components/Pages";

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
        <div id="page-landing">
            <HeaderMenu/>

          <Container fluid className="menu-top pt-3">
                <Row>
                    <Col xs={2}><Sidebar active={params.id}/></Col>
                    <Col xs={10}>
                        <CardColumns>
                            {products.map(product => {
                                return (
                                    <CardsItens key={product.id} id={product.id} thumbnailUrl={product.thumbnailUrl} name={product.name} priceOld={product.priceOld} defaultDisplayedPriceFormatted={product.defaultDisplayedPriceFormatted} />
                                )
                            })}
                        </CardColumns>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 10, offset: 2 }} className={'d-flex justify-content-center'}>
                        <Pages total={proParams || {}} page={params.page}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProductsCategory;