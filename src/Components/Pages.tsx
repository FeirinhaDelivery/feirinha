import React from "react";
import {Pagination} from "react-bootstrap";
import {useParams} from "react-router-dom";

import '../Styles/components/pages.css';

interface ProductParams {
    slug: string;
    id: string;
    limit: string;
    offset: string;
    page: string;
}

function Pages(props: { total: object, page: string }) {
    const params = useParams<ProductParams>();
    let active: string = props.page;
    let items: any[] = [];
    let dados: any[] = [];

    if (Object.entries(props.total).length > 0) {
        Object.entries(props.total).map(([key, value], i) => dados.push(value));
    }
    let totalPages = Math.ceil(parseFloat(dados[0]) / parseFloat(dados[3]));


    for (let number = 0; number < totalPages; number++) {
        let newOffset = dados[3] * number;

        items.push(
            <Pagination.Item key={number} active={number.toString() === active.toString()}
                             href={`/produtos/${params.slug}/c/${params.id}/${dados[3]}/${newOffset}/${number}`}>
                {number + 1}
            </Pagination.Item>,
        );

    }

    return (
        <Pagination className={'mx-auto my-4'}>
            {
                ((parseFloat(params.page) - 1) >= 0) ?
                    <Pagination.Prev
                        href={`/produtos/${params.slug}/c/${params.id}/${dados[3]}/${parseFloat(dados[2]) - parseFloat(params.limit)}/${parseFloat(params.page) - 1}`}/>
                    : ''
            }
            {items}
            {
                ((parseFloat(params.page) + 1) < totalPages) ?
                    <Pagination.Next
                        href={`/produtos/${params.slug}/c/${params.id}/${dados[3]}/${parseFloat(dados[2]) + parseFloat(params.limit)}/${parseFloat(params.page) + 1}`}/>
                    : ''
            }

        </Pagination>
    );
}

export default Pages;