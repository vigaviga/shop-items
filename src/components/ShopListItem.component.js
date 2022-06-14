import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import './ShopListItem.styles.css';

import './ShopListItem.styles.css';

function ShopListItem({ item }) {
    return (<div className='list-item-container'>
        <List>
            <ListItem>
                <ListItemText key={item.id + item.Name} primary={item.Name} />
            </ListItem>
            <ListItem>
                <ListItemText key={item.id + item.Price} primary={item.Price} />
            </ListItem>
            <ListItem>
                <ListItemText key={item.id + item.Weight} primary={item.Weight} />
            </ListItem>
            <ListItem>
                <ListItemText key={item.id + item.StartDate.getMilliseconds()} primary={item.StartDate.toDateString()} />
            </ListItem>
            <ListItem>
                <ListItemText key={item.id + item.EndDate.getMilliseconds()} primary={item.EndDate.toDateString()} />
            </ListItem>
        </List>
    </div>)
}

export default ShopListItem;