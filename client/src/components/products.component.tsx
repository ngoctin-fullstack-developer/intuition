import React from 'react'
import '../styles/products.style.scss'
import { Row, Col, Card, Button } from 'react-bootstrap'
import ProductCard from '../components/productCard.component'
import { IProduct } from '../models/product.model'
const Products = () => {

    const products : Array<IProduct> = [
        {
            id : "01",
            name : "Product",
            price : 100,
            description : "description",
            images : [
                "/images/shirt01.jpg"
            ],
            sizes : [
                "S ","M ","L ","XL "
            ]
        },
        {
            id : "02",
            name : "Product",
            price : 100,
            description : "description",
            images : [
                "/images/shirt01.jpg"
            ],
            sizes : [
                "S ","M ","L ","XL "
            ]
        },
        {
            id : "03",
            name : "Product",
            price : 100,
            description : "description",
            images : [
                "/images/shirt01.jpg"
            ],
            sizes : [
                "S ","M ","L ","XL "
            ]
        },
        {
            id : "04",
            name : "Product",
            price : 100,
            description : "description",
            images : [
                "/images/shirt01.jpg"
            ],
            sizes : [
                "S ","M ","L ","XL "
            ]
        },
        {
            id : "05",
            name : "Product",
            price : 100,
            description : "description",
            images : [
                "/images/shirt01.jpg"
            ],
            sizes : [
                "S ","M ","L ","XL "
            ]
        },
        {
            id : "06",
            name : "Product",
            price : 100,
            description : "description",
            images : [
                "/images/shirt01.jpg"
            ],
            sizes : [
                "S ","M ","L ","XL "
            ]
        },
        {
            id : "07",
            name : "Product",
            price : 100,
            description : "description",
            images : [
                "/images/shirt01.jpg"
            ],
            sizes : [
                "S ","M ","L ","XL "
            ]
        },
        {
            id : "08",
            name : "Product",
            price : 100,
            description : "description",
            images : [
                "/images/shirt01.jpg"
            ],
            sizes : [
                "S ","M ","L ","XL "
            ]
        },
    ]

    return (
        <div className='products'>
            <h1>Products</h1>
            <Row xs={1} md={4} className="g-4">
                {
                    products.map(product => (
                        <Col><ProductCard {...product} /></Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Products