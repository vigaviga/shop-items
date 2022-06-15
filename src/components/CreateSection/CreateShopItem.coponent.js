import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux'
import { addShopItemsToAdd } from '../createSlice';
import shortid from 'shortid'

import './CreateShopItem.styles.css'

function CreateShopItem() {
    const [name, setName] = useState("");
    const [nameInvalid, setNameInvalid] = useState(false);

    const [price, setPrice] = useState("");
    const [priceInvalid, setPriceInvalid] = useState(false);

    const [weight, setWeight] = useState("");
    const [weightInvalid, setWeightInvalid] = useState(false);

    const [startDate, setStartDate] = useState("");
    const [startDateInvalid, setStartDateInvalid] = useState(false);

    const [endDate, setEndDate] = useState("");
    const [endDateInvalid, setEndDateInvalid] = useState(false);

    const nameRef = React.useRef(null);
    const priceRef = React.useRef(null);
    const weightRef = React.useRef(null);
    const startDateRef = React.useRef(null);
    const endDateRef = React.useRef(null);


    const items = useSelector((state) => state.shopItems.shopItemsToAdd)
    const dispatch = useDispatch();


    const setTextFieldsValid = () => {
        setNameInvalid(false);
        setPriceInvalid(false);
        setWeightInvalid(false);
        setStartDateInvalid(false);
        setEndDateInvalid(false);
    }

    const validateFields = () => {
        if (name === "") {
            setNameInvalid(true);
        }

        if (price === "") {
            setPriceInvalid(true);
        }

        if (weight === "") {
            setWeightInvalid(true);
        }

        if (name === "") {
            setNameInvalid(true);
        }

        if (startDate === "") {
            setStartDateInvalid(true);
        }

        if (endDate === "") {
            setEndDateInvalid(true);
        }
    }

    const setDefaultValues = () => {
        setName("");
        setPrice("")
        setWeight("");
        setStartDate("");
        setEndDate("");
        nameRef.current.value = "";
        priceRef.current.value = "";
        weightRef.current.value = "";
        startDateRef.current.value = "";
        endDateRef.current.value = "";

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        setTextFieldsValid();
        validateFields();
        console.log(startDate);
        console.log(endDate);
        if (name && price && weight && startDate && endDate) {
            const shopItemToAdd = {
                id: shortid.generate(),
                Name: name,
                Price: price,
                Weight: weight,
                StartDate: startDate,
                EndDate: endDate
            }
            dispatch(addShopItemsToAdd(shopItemToAdd));
            setDefaultValues();
        }
    }

    return (<div>
        <div className='create-item-container'>
            <Box sx={{ height: 350, width: 400, p: 2, border: '1px solid black' }}>
                <form noValidate onSubmit={handleSubmit}>
                    <div className='detail-container'>
                        <p>Name</p>
                        <TextField
                            required
                            id="outlined-required"
                            inputRef = {nameRef}
                            label="Required"
                            placeholder="Name"
                            onChange={e => setName(e.target.value)}
                            error={nameInvalid}
                        />
                    </div>
                    <div className='detail-container'>
                        <p>Price</p>
                        <TextField
                            required
                            id="outlined-required"
                            type="number"
                            inputRef = {priceRef}
                            label="Required"
                            placeholder="Price"
                            onChange={e => setPrice(e.target.value)}
                            error={priceInvalid}
                        />
                    </div>
                    <div className='detail-container'>
                        <p>Weight</p>
                        <TextField
                            required
                            id="outlined-required"
                            type="number"
                            inputRef = {weightRef}
                            label="Required"
                            placeholder="Weight"
                            onChange={e => setWeight(e.target.value)}
                            error={weightInvalid}
                        />
                    </div>
                    <div className='detail-container'>
                        <p>Start date</p>
                        <TextField
                            required
                            id="date"
                            inputRef = {startDateRef}
                            label="Start Date"
                            type="date"
                            placeholder="2022-05-24"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e => setStartDate(e.target.value)}
                            error={startDateInvalid}
                        />
                    </div>
                    <div className='detail-container'>
                        <p>End Date</p>
                        <TextField
                            required
                            id="date"
                            inputRef = {endDateRef}
                            label="End Date"
                            type="date"
                            placeholder="2022-05-25"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e => setEndDate(e.target.value)}
                            error={endDateInvalid}
                        />
                    </div>
                    <div className='button-container'>
                        <Button type="submit" variant="contained">+</Button>
                    </div>
                </form>
            </Box>
        </div>

    </div>)
}

export default CreateShopItem;