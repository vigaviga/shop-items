import React from 'react';
import ShopListItem from './ShopListItem.component';
import {useSelector} from 'react-redux'

import './ShopItems.styles.css';

function ShopItems(){
    const shopItems = useSelector((state) => state.shopItems.shopItemsToAdd)

    return(
        <div className='shop-items-container'>
            {shopItems.map(shopItem => <ShopListItem item={shopItem}/>)}
        </div>
    )
}

export default ShopItems;