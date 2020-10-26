import React from "react";
import {Badge, Button, Container, Form, FormControl, InputGroup, Nav, Navbar} from "react-bootstrap";
// import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';

import {FaSearch} from 'react-icons/fa';
import {FaUser} from 'react-icons/fa';
import {FaShoppingBag} from 'react-icons/fa';

import logoFeirinha from '../Images/logo-feirinha.svg';

import '../Styles/components/menu.css';


export default function HeaderMenu() {
    // const { goBack } = useHistory();
    return (
        <Navbar bg="light" variant="light" fixed="top">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logoFeirinha}
                        height="50"
                        className="d-inline-block align-top"
                        alt="Feirinha"
                    />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link>
                        <Link to="/app" className="nav-link">
                            Home
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/" className="nav-link">
                            Produtos
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/" className="nav-link">
                            Manifesto
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/" className="nav-link">
                            Assinaturas
                        </Link>
                    </Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl
                        placeholder="O que você procura?"
                        aria-label="O que você procura?"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary"> <FaSearch size={26}/></Button>
                    </InputGroup.Append>
                </Form>
                <Link to="/" className="nav-icon">
                    <FaUser size={26} color="rgba(0, 0, 0, 1)"/>
                </Link>
                <Link to="/" className="nav-icon">
                    <FaShoppingBag size={26} color="rgba(0, 0, 0, 1)"/>
                    <Badge pill variant="success">
                        1
                    </Badge>{' '}
                </Link>
            </Container>
        </Navbar>
    );
}