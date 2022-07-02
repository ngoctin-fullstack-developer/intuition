import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { AppDispatch, canvasSelector } from '../app/store'
import { Offcanvas } from 'react-bootstrap'
import { setMyFilterHidden } from '../app/slices/canvas.slice';
import { Accordion } from 'react-bootstrap';
const Filter = () => {
    const { isFilterShown, isEnableScroll, placement } = useSelector(canvasSelector);
    const dispatch: AppDispatch = useDispatch();
    function handleSearchClose() {
        dispatch(setMyFilterHidden())
    }
    return (
        <Offcanvas show={isFilterShown} onHide={handleSearchClose} placement='start' scroll={isEnableScroll}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Filter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='filter' >
                <Accordion alwaysOpen={true} defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Categories</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Color</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Size</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Price</Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Filter