import React, {useEffect, useState} from "react";
import {ListGroup} from "react-bootstrap";
import {Link} from 'react-router-dom';

import '../Styles/components/sidebar.css';
import api from "../Services/api";

interface Category {
    id: string;
    name: string;
    imageUrl: string;
    url: string;
}

function Sidebar(prop: { active: string }) {
    const [categories, setCategories] = useState<Category[]>([]);

    function activeControl(id: string) {
        if( id == prop.active )
            return 'active'
    }

    useEffect(() => {
        api.get('categories').then(response => {
            console.log(response.data.items)
            setCategories(response.data.items);
        });
    }, []);
    // className="active"
    return (
        <ListGroup variant="flush" className={'sidebar'}>
            {categories.map(category => {
                return (
                    <Link to={"/produtos"+category.url.split("https://feirinha.delivery/#!")[1]} key={category.id}>
                        <ListGroup.Item className={activeControl(category.id) }>
                            <img src={category.imageUrl} alt=""/>
                            {category.name}

                        </ListGroup.Item>
                    </Link>
                )
            })}

            {/*<Link to="/" className="">*/}
            {/*    <ListGroup.Item>*/}
            {/*        <img src={icoVerduras} alt=""/>*/}
            {/*        Verduras*/}

            {/*    </ListGroup.Item>*/}
            {/*</Link>*/}
            {/*<Link to="/" className="">*/}
            {/*    <ListGroup.Item>*/}
            {/*        <img src={icoFrutas} alt=""/>*/}
            {/*        Frutas*/}

            {/*    </ListGroup.Item>*/}
            {/*</Link>*/}
            {/*<Link to="/" className="">*/}
            {/*    <ListGroup.Item>*/}
            {/*        <img src={icoLegumes} alt=""/>*/}
            {/*        Legumes*/}

            {/*    </ListGroup.Item>*/}
            {/*</Link>*/}
            {/*<Link to="/" className="">*/}
            {/*    <ListGroup.Item>*/}
            {/*        <img src={icoCombos} alt=""/>*/}
            {/*        Combos*/}

            {/*    </ListGroup.Item>*/}
            {/*</Link>*/}
            {/*<Link to="/" className="">*/}
            {/*    <ListGroup.Item>*/}
            {/*        <img src={icoDiversos} alt=""/>*/}
            {/*        Diversos*/}

            {/*    </ListGroup.Item>*/}
            {/*</Link>*/}

        </ListGroup>
    );
}

export default Sidebar;