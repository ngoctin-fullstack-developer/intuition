import React, {useState,useEffect} from 'react'
import '../styles/products.style.scss'
import { Row, Col, Card, Button } from 'react-bootstrap'
import ProductCard from '../components/productCard.component'
import { IProduct } from '../models/product.model'
import { Link, useNavigate } from 'react-router-dom'
import ProductService from '../services/product.service'
interface Props {
    title : string
}
const Products = (params : Props) => {

    const navigate = useNavigate();
    useEffect(() => {
       async function fetchData() {
           var products : Array<IProduct> = await ProductService.getAllProducts();
           setProducts(products);
       }
       fetchData();
    }, [])

    function onClickHandler(event:React.MouseEvent) {
        navigate('/productview');   
    }
    

    const [products, setProducts] = useState<Array<IProduct>>([]);

    return (
        <div className='products'>
            <h1>{params.title}</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    products.map(product => (
                        <Col><ProductCard {...product} /></Col>
                    ))
                }
            </Row>
            <button className="custom-btn btn-15" onClick={onClickHandler} >See More</button>
        </div>
    )
}

export default Products