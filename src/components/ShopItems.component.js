import React from 'react';
import ShopListItem from './ShopListItem.component';

function ShopItems({shopItems = []}){
    return(
        <div>
            {console.log(shopItems)}
            {Array.isArray(shopItems) ? shopItems.map(shopItem => <ShopListItem item={shopItem}/>) : null}
        </div>
    )
}

export default ShopItems;