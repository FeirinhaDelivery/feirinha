import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import HeaderMenu from "../Components/HeaderMenu";
import Sidebar from "../Components/Sidebar";
import {Container, Row, Col, CardColumns, Pagination} from "react-bootstrap";
import api from "../Services/api";

// import '../styles/pages/landing.css';

// import logoImg from '../images/logo.svg';

interface Product {
    id: number;
    name: string;
}

interface ProductParams {
    slug: string;
    id: string;
}

export default function ProductView() {
    const params = useParams<ProductParams>();
    const [product, setProduct] = useState<Product>()

    useEffect(() => {

        api.get(`products/${params.id}?enabled=true`)
            .then(response => {
                // console.log(response.data)
                setProduct(response.data);
            });
        console.log('teste'+ product);
    }, [params.id]);

    if (!product) {
        return <p>Carregando...</p>;
    }

    return (
        <div id="page-landing">
            <HeaderMenu/>

            <Container fluid className="menu-top pt-3">
                <Row>
                    <Col xs={2}><Sidebar active={'n'} /></Col>
                    <Col xs={10}>
                        <CardColumns>
                            <h1>{product.name}</h1>
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