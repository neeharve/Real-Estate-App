import React from 'react';
import { Col, Row } from "react-bootstrap";

import '../assets/styles/properties.css'

const list = [
    {
        id: 1,
        cover: require("../assets/images/img-1.jpeg"),
        name: "Red Carpet Real Estate",
        location: "210 Zirak Road, Canada",
        category: "For Rent",
        price: "$3,700",
        type: "Apartment",
    },
    {
        id: 2,
        cover: require("../assets/images/img-2.jpeg"),
        name: "Fairmount Properties",
        location: "5698 Zirak Road, NewYork",
        category: "For Sale",
        price: "$9,750",
        type: "Condos",
    },
    {
        id: 3,
        cover: require("../assets/images/img-3.jpeg"),
        name: "The Real Estate Corner",
        location: "5624 Mooker Market, USA",
        category: "For Rent",
        price: "$5,860",
        type: "Offices",
    },
    {
        id: 4,
        cover: require("../assets/images/img-4.jpeg"),
        name: "Herringbone Realty",
        location: "5621 Liverpool, London",
        category: "For Sale",
        price: "$7,540",
        type: "Homes & Villas",
    },
    {
        id: 5,
        cover: require("../assets/images/img-2.jpeg"),
        name: "Brick Lane Realty",
        location: "210 Montreal Road, Canada",
        category: "For Rent",
        price: "$4,850",
        type: "Commercial",
    },
    {
        id: 6,
        cover: require("../assets/images/img-1.jpeg"),
        name: "Banyon Tree Realty",
        location: "210 Zirak Road, Canada",
        category: "For Sale",
        price: "$2,742",
        type: "Apartment",
    },
];

const PropertyCard = ({ item }) => {
    return <Col className='property-card'>
        <img src={item.cover} alt="Logo" className='card-image' />
        <div className='card-content'>
            <div className='card-tag' style={{
                'background-color': item.category === "For Rent" ? 'aquamarine' : "papayawhip",
                'color': item.category === "For Rent" ? 'darkgreen' : "tomato"
            }}>
                {item.category}
            </div>
            <div className='card-title'>
                {item.name}
            </div>
            <div className='card-desc'>
                {item.location}
            </div>
            <div className='card-footer'>
                <div>
                    <button className='price-button'>{item.price}</button>/sqft
                </div>
                <div className='item-type'>
                    {item.type}
                </div>
            </div>
        </div>
    </Col>
}

export default function Properties() {
    return (
        <Row className='properties-container' xs={1} sm={2} md={2} lg={3} >
            {
                list.map((item) => {
                    return <PropertyCard item={item} />
                })
            }
        </Row>
    )
}
