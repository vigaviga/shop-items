import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
 

import './ShopListItem.styles.css';

function ShopListItem({item} ) {
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
                <ListItemText key={item.id + item.StartDate+1} primary={item.StartDate} />
            </ListItem>
            <ListItem>
                <ListItemText key={item.id + item.EndDate + 2} primary={item.EndDate} />
            </ListItem>
        </List>
    </div>)
}

export default ShopListItem;