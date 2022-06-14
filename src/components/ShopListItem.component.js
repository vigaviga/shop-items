import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';

import './ShopListItem.styles.css';

function ShopListItem({ item }) {
    return (<div>
        <ul>
            <li key={item.id + item.Name}>{item.Name}</li>
            <li key={item.id + item.Price}>{item.Price}</li>
            <li key={item.id + item.Weight}>{item.Weight}</li>
            {/* <li key={item.id + item.StartDate.toDateString()}>{item.StartDate.toDateString()}</li>
            <li key={item.id + item.EndDate.toDateString()}>{item.EndDate.toDateString()}</li> */}
        </ul>
        {/* <Grid item xs={12} md={6}>
            <List>
                <ListItem>
                    <ListItemText key = "id +name" primary="Name"/>
                </ListItem>
            </List>
        </Grid>
        {Object.keys(item).map(k =>console.log(item.k))}; */}
    </div>)
}

export default ShopListItem;