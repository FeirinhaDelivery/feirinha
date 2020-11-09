import React from 'react';
import './Slider.css';
import { Link } from 'react-router-dom';
import { AiOutlineDoubleRight } from 'react-icons/ai';

import saladImg from '../../images/unnamed.svg';

interface SliderProps{
    tittle: string,
    img: string,
}

function Slider(props: SliderProps) {

    const linkStyle = {fontSize: 18, color: "black", fontFamily: "Nunito", fontWeight: 400 }
    const lineThrough = { textDecoration: "line-through"}
    const background01 = { backgroundColor: "#59A8B2"}

    return (
        <div className="products">
            <div className="tittle">
                <h2>{props.tittle}</h2>
            </div>

            <div className="slider">
                <div className="item">
                    <div className="background" style={background01}>
                        <img src={props.img}/>
                    </div>

                    <div className="caption">
                        <div className="caption-tittle">
                            <Link to="#alface" style={linkStyle}>Alface crespa (unid)</Link>
                        </div>

                        <div className="price">
                            <div className="discount">
                                <h2>R$ 3,10</h2>
                            </div>

                            <div className="original-price">
                                <h2 style={ lineThrough }>R$ 4,10</h2>
                            </div>
                        </div>

                        <button>Adicionar</button>
                    </div>
                </div>

                <div className="item">
                    <div className="background" style={background01}>
                        <img src={props.img}/>
                    </div>

                    <div className="caption">
                        <div className="caption-tittle">
                            <Link to="#alface" style={linkStyle}>Alface crespa (unid)</Link>
                        </div>

                        <div className="price">
                            <div className="discount">
                                <h2>R$ 3,10</h2>
                            </div>

                            <div className="original-price">
                                <h2 style={ lineThrough }>R$ 4,10</h2>
                            </div>
                        </div>

                        <button>Adicionar</button>
                    </div>
                </div>

                <div className="item">
                    <div className="background" style={background01}>
                        <img src={props.img}/>
                    </div>

                    <div className="caption">
                        <div className="caption-tittle">
                            <Link to="#alface" style={linkStyle}>Alface crespa (unid)</Link>
                        </div>

                        <div className="price">
                            <div className="discount">
                                <h2>R$ 3,10</h2>
                            </div>

                            <div className="original-price">
                                <h2 style={ lineThrough }>R$ 4,10</h2>
                            </div>
                        </div>

                        <button>Adicionar</button>
                    </div>
                </div>

                <div className="item">
                    <div className="background" style={background01}>
                        <img src={props.img}/>
                    </div>

                    <div className="caption">
                        <div className="caption-tittle">
                            <Link to="#alface" style={linkStyle}>Alface crespa (unid)</Link>
                        </div>

                        <div className="price">
                            <div className="discount">
                                <h2>R$ 3,10</h2>
                            </div>

                            <div className="original-price">
                                <h2 style={ lineThrough }>R$ 4,10</h2>
                            </div>
                        </div>

                        <button>Adicionar</button>
                    </div>
                </div>


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