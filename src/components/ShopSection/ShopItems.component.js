import React from 'react';
import { useSelector } from 'react-redux';
import ShopListItem from '../CreateSection/ShopListItem.component';

const ShopItems = () => {
    let now = new Date();
    let shopItemsToShow=[];

    const shopItems = useSelector((state) => state.shopItems.shopItems);

    for (let i = 0; i <= 4; i++){
        let shopItemsCopy = shopItems.filter(shopItem => new Date(shopItem.StartDate) < now && new Date(shopItem.EndDate) > now && !shopItemsToShow.some(i => i.id == shopItem.id));
        let probabilities = getProbabilities(shopItemsCopy);
        shopItemsToShow.push(getRandom(probabilities, shopItemsCopy));
    }

    function getProbabilities(shopItemsCopy) {
        let probabilities = [];
        let sumOfWeight = 0;
        shopItemsCopy.map(item => { 
            sumOfWeight += parseInt(item.Weight) 
        });
        shopItemsCopy.map(item => probabilities.push(item.Weight / sumOfWeight));
        return probabilities;
    }

    function getRandom (probabilities, shopItemsCopy) {
        var num = Math.random(),
            s = 0,
            lastIndex = probabilities.length - 1;
    
        for (var i = 0; i < lastIndex; ++i) {
            s += probabilities[i];
            if (num < s) {
                return shopItemsCopy[i];
            }
        }
    
        let itemToAdd =  shopItemsCopy[lastIndex];
        shopItemsCopy = shopItemsCopy.splice(lastIndex, 1);
        return itemToAdd;
    };

    return (
        <div className='shop-items-container'>
            {shopItemsToShow.map(shopItem => <ShopListItem item={shopItem} />)}
        </div>
    )
}
export default ShopItems;