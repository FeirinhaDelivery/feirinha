import React from 'react';
import { Link } from 'react-router-dom';
import HeaderMenu from "../Components/HeaderMenu";
import {Container, Row, Col, Card} from "react-bootstrap";

// import '../styles/pages/landing.css';

// import logoImg from '../images/logo.svg';

function Landing() {
    return (
        <div id="page-landing">
            <HeaderMenu />

            <Container fluid className="menu-top">
                <Row >
                    <Col xs={3}>1 of 3</Col>
                    <Col xs={9}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title className="text-center">Tomate</Card.Title>
                                <Card.Text>
                                    R$ 3.10 <small>Kg</small>
                                </Card.Text>
                                <div className="text-center">
                                    <Link to="/" className="btn btn-outline-link">
                                        Adicionar
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Landing;