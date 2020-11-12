import React, {useEffect, useState} from 'react';
import '../Styles/components/slider.css';
import { Link } from 'react-router-dom';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import api from "../Services/api";
import {CardDeck} from "react-bootstrap";
import CardsItens from "../Utils/CardsItens";

// import saladImg from '../../images/unnamed.svg';

interface SliderProps{
    tittle: string,
    offer: boolean,
    category: number,
    stylePessoal: string,
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
    const background01 = { backgroundColor: "#59A8B2"}

    useEffect(() => {
        if (props.category > 0) {
            url = `products?category=${props.category}&enabled=true&limit=5&offset=0&sortBy=NAME_ASC`
        } else {
            url = `products?onsale=onsale&enabled=true&limit=5&offset=0&sortBy=NAME_ASC`
        }
        console.log(url);
        api.get(url)
            .then(response => {
                setProducts(response.data.items);
                setLoading(false);
            });
    }, [isLoading]);
    return (
        <div className="products">
            <div className={"tittle " + props.stylePessoal}>
                <h2>{props.tittle}</h2>
            </div>

            <div className="slider">

                <CardDeck>
                    {(Object.entries(products).length > 0) ?
                        products.map(product => {
                            return (
                                <CardsItens key={product.id} id={product.id} thumbnailUrl={product.thumbnailUrl}
                                            name={product.name} priceOld={product.priceOld}
                                            defaultDisplayedPriceFormatted={product.defaultDisplayedPriceFormatted}/>
                            )
                        }) : ''}
                </CardDeck>



                <div className="more" style={background01}>
                    <Link to="#products">
                        <h3>Ver mais produtos</h3>
                        <AiOutlineDoubleRight />

                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Slider;
