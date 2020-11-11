import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import {Link} from 'react-router-dom';

import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';

import logoFeirinha from '../Images/logo-feirinha.svg';

import '../Styles/components/footer.css';


export default function HeaderMenu() {
    return (
        <footer className={"mt-4"}>
            <div className="bg-footer">
                <Container>
                    <Row>
                        <Col xs={12} sm={3} className={"text-center my-auto"}>
                            <p>Acompanhe de perto!</p>
                            <FaFacebookSquare size={26} color="rgba(57, 60, 78, 1)" className={"mx-2"} />
                            <FaInstagram size={26} color="rgba(57, 60, 78, 1)" className={"mx-2"} />
                            <FaYoutube size={26} color="rgba(57, 60, 78, 1)" className={"mx-2"} />
                        </Col>
                        <Col xs={12} sm={6} className={"text-center mt-3"}>
                            <img src={logoFeirinha} alt="Logo Feirinha" className={"align-middle"} />
                        </Col>
                        <Col xs={12} sm={3} className={"text-right"}>
                            <h6><strong>Link Úteis</strong></h6>
                            <Link to="/" className="">Quem Somos</Link><br/>
                            <Link to="/" className="">Políticas de Pagamento</Link><br/>
                            <Link to="/" className="">Políticas de Entrega</Link><br/>
                            <Link to="/" className="">Termos de Uso e Privacidade</Link><br/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="copy"><strong>Feirinha</strong> &copy; 2020</div>
        </footer>
    );
}