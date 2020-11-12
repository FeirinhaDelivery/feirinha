import React, {FunctionComponent} from "react";
import {Card} from "react-bootstrap";
import '../Styles/utils/cards.css';

interface CardProps {
    id: number;
    thumbnailUrl: string;
    name: string;
    priceOld: number;
    defaultDisplayedPriceFormatted: number;
}

const CardsItens: FunctionComponent<CardProps> = (props) => {
    return (
            <Card key={props.id} >
                <Card.Img variant="top" src={props.thumbnailUrl}/>
                <Card.Body>
                    <Card.Title
                        className="product_title text-center">{props.name}</Card.Title>
                    <Card.Text className={'product'}>
                        {props.priceOld ?
                            <span className={'price_old'}>
                                {props.priceOld} <small className={'mr-3'}>Kg</small>
                            </span>
                            :
                            ''
                        }
                        <span className={'price'}>
                            {props.defaultDisplayedPriceFormatted} <small>Kg</small>
                        </span>
                    </Card.Text>
                    <div className="text-center">
                        {/*<Link to={"produto" + product.url.split("https://feirinha.delivery/#!")[1]}*/}
                        {/*      className="btn btn-outline-primary">*/}
                        {/*    Adicionar*/}
                        {/*</Link>*/}
                    </div>
                </Card.Body>
            </Card>
    );
};

export default CardsItens;