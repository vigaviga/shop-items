import React from 'react';
import ShopListItem from './ShopListItem.component';
import './ShopItems.styles.css';

function ShopItems({shopItems = []}){
    return(
        <div className='shop-items-container'>
            {Array.isArray(shopItems) ? shopItems.map(shopItem => <ShopListItem item={shopItem}/>) : null}
        </div>
    )
}

export default ShopItems;