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
        if( id === prop.active )
            return 'active'
    }

    useEffect(() => {
        api.get('categories').then(response => {
            setCategories(response.data.items);
        });
    }, []);
    return (
        <ListGroup variant="flush" className={'sidebar'}>
            {categories.map(category => {
                return (
                    <Link to={"/produtos"+category.url.split("https://feirinha.delivery/#!")[1]+'/8/0/0'} key={category.id}>
                        <ListGroup.Item className={activeControl(category.id) }>
                            <img src={category.imageUrl} alt=""/>
                            {category.name}
                        </ListGroup.Item>
                    </Link>
                )
            })}
        </ListGroup>
    );
}

export default Sidebar;