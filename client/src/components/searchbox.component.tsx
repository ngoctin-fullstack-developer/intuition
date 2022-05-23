import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { AppDispatch, canvasSelector } from '../app/store'
import { Offcanvas, ListGroup } from 'react-bootstrap'
import { setSearchBoxHidden } from '../app/slices/canvas.slice';
import '../styles/searchbox.style.scss'
import { IProduct } from '../models/product.model';
import { Link } from 'react-router-dom';
const SearchBox = () => {
    const { isSearchBoxShown, isEnableScroll, placement } = useSelector(canvasSelector);
    const dispatch: AppDispatch = useDispatch();
    const handleSearchClose = () => { dispatch(setSearchBoxHidden()) };
    // const [products, setProducts] = useState<Array<IProduct>>([]);

    // async function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    //     // call service to set search products
    //     var searchValue = event.currentTarget.value;
    //     console.log(searchValue.length)
    //     if (searchValue.length > 0) {
    //         var data: Array<IProduct> = await ProductService.getProductsByLikeName(searchValue, 5);
    //         setProducts(data);
    //     }else if(searchValue.length === 0) {
    //         setProducts([]);
    //     }
    // }

    var products: Array<IProduct> = [
        {
            no: '1',
            name: 'Product',
            cate_no: 1,
            description: 'description ',
            entp_no: 1,
            images: [],
            insert_date: '23/05/2022',
            insert_id: 'ngoctin',
            modified_date: '23/05/2022',
            modify_id: 'ngoctin',
            price: '100.000',
            quantity: 10,
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        },
        {
            no: '1',
            name: 'Product',
            cate_no: 1,
            description: 'description ',
            entp_no: 1,
            images: [],
            insert_date: '23/05/2022',
            insert_id: 'ngoctin',
            modified_date: '23/05/2022',
            modify_id: 'ngoctin',
            price: '100.000',
            quantity: 10,
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        },
        {
            no: '1',
            name: 'Product',
            cate_no: 1,
            description: 'description ',
            entp_no: 1,
            images: [],
            insert_date: '23/05/2022',
            insert_id: 'ngoctin',
            modified_date: '23/05/2022',
            modify_id: 'ngoctin',
            price: '100.000',
            quantity: 10,
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        },
        {
            no: '1',
            name: 'Product',
            cate_no: 1,
            description: 'description ',
            entp_no: 1,
            images: [],
            insert_date: '23/05/2022',
            insert_id: 'ngoctin',
            modified_date: '23/05/2022',
            modify_id: 'ngoctin',
            price: '100.000',
            quantity: 10,
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        },
        {
            no: '1',
            name: 'Product',
            cate_no: 1,
            description: 'description ',
            entp_no: 1,
            images: [],
            insert_date: '23/05/2022',
            insert_id: 'ngoctin',
            modified_date: '23/05/2022',
            modify_id: 'ngoctin',
            price: '100.000',
            quantity: 10,
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        }

    ]

    return (
        <Offcanvas show={isSearchBoxShown} onHide={handleSearchClose} placement='start' scroll={isEnableScroll}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search Products</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='searchBox' >
                {/* <input type="text" name="" id="searchValue" onChange={onChangeHandler} /> */}
                <input type="text" name="" id="searchValue" />
                <ListGroup>
                    {products.map(product =>
                        <ListGroup.Item key={product.no}>
                            <img src="/images/shirt01.jpg" alt="" />
                            <div className='__content' >
                                <Link to='/ProductDetail/:productID' >{product.name}</Link>
                                <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                                <div className='__bottom' >
                                    <small>500.000</small>
                                    <small>{product.price}</small>
                                </div>
                            </div>
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    )

}

export default SearchBox