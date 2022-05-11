import React from 'react'
import { IProduct } from '../models/product.model';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../styles/product.card.style.scss'

const ProductCard = (product : IProduct) => {

    function onClick(event:React.MouseEvent) {
        var btnId = event.currentTarget.getAttribute('id');
        if(btnId === 'addToCartBtn'){
            
        }
    }

    return (
        <div className="container page-wrapper">
            <div className="page-inner">
                <div className="row">
                    <div className="el-wrapper">
                        <div className="box-up">
                            <img className="img" src={product.images[0]} alt="image" />
                            {/* <img className="img" src="/images/shirt01.jpg" alt="image" /> */}
                            <div className="img-info">
                                <div className="info-inner">
                                    <span className="p-name">{product.name}</span>
                                    {/* <span className="p-company">Yeezy</span> */}
                                </div>
                                <div className="a-size">{"Available sizes :"}   
                                {product.sizes.map(size => <span className="size">{size}</span>)}
                                </div>
                                <div className="a-buttons"> 
                                <button id='addToCartBtn' onClick={onClick} ><AddShoppingCartIcon/></button>
                                </div>
                            </div>
                        </div>
                        <div className="box-down">
                            <div className="h-bg">
                                <div className="h-bg-inner" />
                            </div>
                            <a className="cart" href="#">
                                <span className="price">{product.price}</span>
                                <span className="add-to-cart">
                                    <button>Details</button>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard