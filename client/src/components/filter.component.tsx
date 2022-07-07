import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { AppDispatch, canvasSelector, filterSelector } from '../app/store'
import { Offcanvas } from 'react-bootstrap'
import { setMyFilterHidden } from '../app/slices/canvas.slice';
import { Accordion, Form } from 'react-bootstrap';
import { Slider, TextField } from '@mui/material';
import { addFilter, removeFilter } from '../app/slices/filter.slice';
import '../styles/filter.style.scss'
import SingleFilter from './singleFilter.component';
import FilterService from '../services/filter.service';
const Filter = () => {

    const categories = ["Jacket", "Shirt", "Pant"];
    const colors = ["Red", "Yellow", "Pink", "Green", "Blue", "Black"]
    const sizes = ["S", "XS", "M", "L", "XL", "XXL"]
    const filter = useSelector(filterSelector);
    const { isFilterShown, isEnableScroll, placement } = useSelector(canvasSelector);

    const dispatch: AppDispatch = useDispatch();
    function handleSearchClose() {
        dispatch(setMyFilterHidden())
    }
    const [slideBarValue, setSlideBarValue] = useState<number[]>([0, 10000000]);
    const minDistance = 1000000;
    // function valuetext(value: number) {
    //     return `${value}VND`;
    // }

    const handleChange2 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        console.log('handleChange2')
        if (!Array.isArray(newValue)) {
            console.log("not array")
            return;
        }
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                console.log("activeThumb === 0")
                const clamped = Math.min(newValue[0], 10000000 - minDistance);
                dispatch(addFilter({
                    type: "price",
                    title: `${clamped}-${clamped + minDistance}`
                }))
                setSlideBarValue([clamped, clamped + minDistance]);
            } else {
                console.log("activeThumb !== 0")
                const clamped = Math.max(newValue[1], minDistance);
                dispatch(addFilter({
                    type: "price",
                    title: `${clamped - minDistance}-${clamped}`
                }))
                setSlideBarValue([clamped - minDistance, clamped]);
            }
        } else {
            console.log("else")
            setSlideBarValue(newValue as number[]);
        }
        dispatch(addFilter({
            type: "price",
            title: `${newValue[0]}-${newValue[1]}`
        }))
        // if (newValue[0] === 0 && newValue[1] === 10000000) {
        //     console.log("min-max")
        //     dispatch(removeFilter({
        //         type: "price",
        //         title: ''
        //     }))
        // } else {
        //     console.log("customize")
        //     if (newValue[0] === 0) {
        //         dispatch(addFilter({
        //             type: "price",
        //             title: `0-${newValue[1]}`
        //         }))
        //     }
        //     if (newValue[1] === 10000000) {
        //         dispatch(addFilter({
        //             type: "price",
        //             title: `${newValue[0]}-10000000`
        //         }))
        //     }
        // }
    };

    function onPriceChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        var currSelected = event.currentTarget.getAttribute('name');
        var newValues: number[] = [0, 10000000];
        if (currSelected === 'min-price') {
            try {
                newValues = [Number.parseInt(event.currentTarget.value), slideBarValue[1]];
                setSlideBarValue(newValues);
            } catch (error) {
                // show modal : is number only !
                newValues = [0, slideBarValue[1]];
                setSlideBarValue(newValues);
            }
        } else if (currSelected === 'max-price') {
            try {
                newValues = [slideBarValue[0], Number.parseInt(event.currentTarget.value)];
                setSlideBarValue(newValues);
            } catch (error) {
                // show modal : is number only !
                newValues = [slideBarValue[0], 10000000];
                setSlideBarValue(newValues);
            }
        }
        dispatch(addFilter({
            type: "price",
            title: `${newValues[0]}-${newValues[1]}`
        }))

    }
    function onCategoryChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        var isChecked = event.currentTarget.checked;
        var cate = event.currentTarget.getAttribute('name');
        console.log("onCategoryChangeHandler")
        console.log("cate : " + cate?.toString())
        if (cate) {
            if (isChecked) {
                dispatch(addFilter({
                    type: "cate",
                    title: cate
                }))
            } else {
                console.log("remove")
                dispatch(removeFilter({
                    type: "cate",
                    title: cate
                }))
            }
        } else {
            // log err
        }
    }
    function onColorChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        var isChecked = event.currentTarget.checked;
        var color = event.currentTarget.getAttribute('name');
        if (color) {
            if (isChecked) {
                dispatch(addFilter({
                    type: "color",
                    title: color
                }))
            } else {
                dispatch(removeFilter({
                    type: 'color',
                    title: color
                }))
            }
        } else {
            //log err
        }
    }
    function onSizeChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        var isChecked = event.currentTarget.checked;
        var size = event.currentTarget.getAttribute('name');
        if (size) {
            if (isChecked) {
                dispatch(addFilter({
                    type: "size",
                    title: size
                }))
            } else {
                dispatch(removeFilter({
                    type: 'size',
                    title: size
                }))
            }
        } else {
            //log err
        }
    }

    return (
        <Offcanvas show={isFilterShown} onHide={handleSearchClose} placement='start' scroll={isEnableScroll}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Filter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='filter' >
                {
                    ((
                        typeof filter.cates !== "undefined"
                        || typeof filter.colors !== "undefined"
                        || typeof filter.sizes !== "undefined"
                        || typeof filter.price !== "undefined"
                    ) && (filter.cates.length !== 0
                        || filter.colors.length !== 0
                        || filter.sizes.length !== 0
                        || (filter.price.min !== 0 && filter.price.max !== 10000000)))
                    && <div className='__content'>
                        {filter.cates.map(cate => (<SingleFilter key={cate} type="cate" title={cate} />))}
                        {filter.sizes.map(size => (<SingleFilter key={size} type="size" title={size} />))}
                        {filter.colors.map(color => (<SingleFilter key={color} type="color" title={color} />))}
                        {(filter.price.min !== 0 && filter.price.max !== 10000000) &&
                            <SingleFilter type="price" key="price" title={`${filter.price.min} - ${filter.price.max}`} />
                        }
                    </div>
                }
                <Accordion className='__accordion' alwaysOpen={true}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Categories</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <div key={`inline-checkbox`} className="mb-3">
                                    {
                                        categories.map(category => (
                                            <Form.Check
                                                inline
                                                id={`${category}`}
                                                itemID={`${category}`}
                                                label={`${category}`}
                                                name={`${category}`}
                                                type="checkbox"
                                                // defaultChecked={FilterService.isExistedInFilter({ type: "cate", title: category }, filter)}
                                                checked={FilterService.isExistedInFilter({ type: "cate", title: category }, filter)}
                                                onChange={onCategoryChangeHandler}
                                            // id={`inline-checkbox-1`}
                                            />
                                        ))
                                    }
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Color</Accordion.Header>
                        <Accordion.Body>

                            <Form>
                                <div key={`inline-checkbox`} className="mb-3">
                                    {
                                        colors.map(color => (
                                            <Form.Check
                                                inline
                                                label={`${color}`}
                                                name={`${color}`}
                                                type="checkbox"
                                                id={`${color}`}
                                                checked={FilterService.isExistedInFilter({ type: "color", title: color }, filter)}
                                                onChange={onColorChangeHandler}
                                            />
                                        ))
                                    }
                                </div>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Size</Accordion.Header>
                        <Accordion.Body>
                            {
                                sizes.map(size => (
                                    <Form.Check
                                        inline
                                        label={`${size}`}
                                        name={`${size}`}
                                        type="checkbox"
                                        checked={FilterService.isExistedInFilter({ type: "size", title: size }, filter)}
                                        id={`${size}`}
                                        onChange={onSizeChangeHandler}
                                    />
                                ))
                            }
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Price</Accordion.Header>
                        <Accordion.Body>
                            <Slider
                                getAriaLabel={() => 'Minimum distance shift'}
                                value={slideBarValue}
                                onChange={handleChange2}
                                valueLabelDisplay="auto"
                                // // getAriaValueText={valuetext}
                                max={10000000}
                                min={0}
                                step={100000}
                                disableSwap
                            />
                            <div className='__inputs'>
                                <div className='__input'>
                                    <small>From</small>
                                    <TextField id="outlined-basic" type="number" name="min-price" onChange={onPriceChangeHandler} value={slideBarValue[0]} label="Min" variant="outlined" />
                                    {/* <TextField id="outlined-basic" type="number" name="min-price" value={slideBarValue[0]} label="Min" variant="outlined" /> */}
                                    <small>VND</small>
                                </div>
                                <div className='__input'>
                                    <small>To</small>
                                    <TextField id="outlined-basic" type="number" name="max-price" onChange={onPriceChangeHandler} value={slideBarValue[1]} label="Max" variant="outlined" />
                                    {/* <TextField id="outlined-basic" type="number" name="max-price" value={slideBarValue[1]} label="Max" variant="outlined" /> */}
                                    <small>VND</small>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Filter