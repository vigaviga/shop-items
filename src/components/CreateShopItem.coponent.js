import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './CreateShopItem.styles.css'

function CreateShopItem() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [weight, setWeight] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    let settingValue = (e) => {
        console.log(e)
    }

    let addShopItem = () => {

    }

    return (<div>
        <div className='create-item-container'>
            <Box sx={{ height: 350, width: 400, p: 2, border: '1px solid green' }}>
                <div className='details-container'>
                    <div className='detail-container'>
                        <p>Name</p>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            placeholder="Name"
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className='detail-container'>
                        <p>Price</p>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            placeholder="Price"
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                    <div className='detail-container'>
                        <p>Weight</p>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            placeholder="Weight"
                            onChange={e => setWeight(e.target.value)}
                        />
                    </div>
                    <div className='detail-container'>
                        <p>Start date</p>
                        <TextField
                            id="date"
                            label="Start Date"
                            type="date"
                            placeholder="2022-05-24"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className='detail-container'>
                        <p>End Date</p>
                        <TextField
                            id="date"
                            label="End Date"
                            type="date"
                            placeholder="2022-05-25"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e => setEndDate(e.target.value)}
                        />
                    </div>

                </div>
            </Box>
        </div>
        <div className='button-container'>
            <Button variant="contained" onClick={(e)=>addShopItem(e)}>+</Button>
        </div>
    </div>)
}

export default CreateShopItem;