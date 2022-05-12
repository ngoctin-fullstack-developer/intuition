import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ImageCarousel, { ImageType } from '../components/image.carousel.component';
import '../styles/product.detail.view.style.scss'
import '../styles/image.carousel.style.scss'
import Header from '../components/header.component';
import Footer from '../components/footer.component';
import StarIcon from '@mui/icons-material/Star';
import ColorCircle from '../components/color.circle.component';
import { Tabs, Tab } from 'react-bootstrap'
import Products from '../components/products.component';
const ProductDetailView = () => {

    const { productID } = useParams();
    const [key, setKey] = useState('productdetail');
    const [images, setImages] = useState<ImageType[]>();

    useEffect(() => {
        setImages(
            Array.from(Array(5).keys()).map((id) => ({
                id,
                url: `https://picsum.photos/1000?random=${id}`
            }))
        );
    }, []);

    return (
        <div className='product-detail' >
            <Header />
            <div className='__container'>
                {
                    /** Breadcrumb */
                    /** Content (slider : infor) */
                    /** Related products */
                }
                <div className='__breadcrumb' ></div>
                <div className='__content' >
                    <div className='__slider'>
                        <ImageCarousel images={images} />
                    </div>
                    <div className='__infor' >
                        <h2>Women Supima Cotton V-Neck Short - Sleeve T-Shirt</h2>
                        <div className='__reviews' >
                            <div className='__stars'>
                                {
                                    [...Array(5)].map(star => <StarIcon />)
                                }
                            </div>
                            <Link to="/">reviews</Link>
                        </div>
                        <div className='__prices'>
                            <p>$14.90</p>
                            <p>$9.90</p>
                        </div>
                        <div className='__line' ></div>
                        <div className='__color'>
                            <div className='__text'>
                                <p>Color : </p>
                                <p>red</p>
                            </div>
                            <div className='__circles' >
                                <ColorCircle key='01' color='#f5633b' />
                                <ColorCircle key='02' color='#3bf566' />
                                <ColorCircle key='03' color='#f73131' />
                            </div>
                        </div>
                        <div className='__line' ></div>
                        <div className='__sizes'>
                            <div className='__text'>
                                <p>Sizes : </p>
                            </div>
                            <div className='__boxes'>
                                <p>S</p>
                                <p>XS</p>
                                <p>M</p>
                                <p>L</p>
                                <p>XL</p>
                                <p>XXL</p>
                            </div>
                        </div>
                        <div className='__line' ></div>
                        <div className='__qty-buttons' >
                            <div className='__qty' >
                                <p>Qty : </p>
                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <div className='__buttons' >
                                <button>ADD TO CART</button>
                                <button>ADD TO FAVOURITE LIST</button>
                            </div>
                        </div>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => {
                                if (k) setKey(k)
                            }}
                            className="mb-2"
                        >
                            <Tab eventKey="productdetail" title="Product Detail">
                                Product Detail
                            </Tab>
                            <Tab eventKey="material" title="Materials & Care">
                            Materials & Care
                            </Tab>
                        </Tabs>
                    </div>
                </div>
                <div className='__related-products' >
                    <Products title='Related Products'/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetailView