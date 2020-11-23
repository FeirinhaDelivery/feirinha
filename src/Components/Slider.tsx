import React, {useEffect, useState} from 'react';
import '../Styles/components/slider.css';
import {Link} from 'react-router-dom';
import {AiOutlineDoubleRight} from 'react-icons/ai';
import api from "../Services/api";
import {CardDeck, Container, Row, Col, Card} from "react-bootstrap";
import CardsItens from "../Utils/CardsItens";

// import saladImg from '../../images/unnamed.svg';

interface SliderProps {
    tittle: string,
    offer: boolean,
    category: number,
    stylePessoal: string,
    urlCategory: string,
}

interface Product {
    id: number;
    name: string;
    percentDiscount: number;
    defaultDisplayedPriceFormatted: number;
    priceOld: number;
    thumbnailUrl: string;
    url: string;
}

function Slider(props: SliderProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setLoading] = useState(true);
    let url = null;

    useEffect(() => {
        if (props.category > 0) {
            url = `products?category=${props.category}&enabled=true&limit=5&sortBy=RELEVANCE`
        } else {
            url = `products?onsale=onsale&enabled=true&limit=5&sortBy=RELEVANCE`
        }
        api.get(url)
            .then(response => {
                setProducts(response.data.items);
                setLoading(false);
            });
    }, [isLoading]);
    return (
        <Container fluid className="mt-4">
            <Row>
                <Col xs={12} md={10} className={"mx-auto tittle mb-3 " + props.stylePessoal}>
                    <h2>{props.tittle}</h2>
                </Col>
                <Col xs={12} md={10} className={"mx-auto"}>
                    <CardDeck>
                        {(Object.entries(products).length > 0) ?

                            products.map(product => {
                                return (
                                    <CardsItens key={product.id} id={product.id} thumbnailUrl={product.thumbnailUrl}
                                                name={product.name} priceOld={product.priceOld}
                                                defaultDisplayedPriceFormatted={product.defaultDisplayedPriceFormatted}/>
                                )
                            }) : ''}
                        <Card>
                            <div className={"card-img-top btn-mais-produtos " + props.stylePessoal + '-produtos '}>
                                <Link to={props.urlCategory}>
                                    Ver mais produtos <AiOutlineDoubleRight/>
                                </Link>
                            </div>
                        </Card>
                    </CardDeck>
                </Col>
            </Row>
        </Container>
    );
}

export default Slider;
