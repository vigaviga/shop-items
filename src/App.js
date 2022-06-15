import './App.css';
import CreateShopItem from './components/CreateShopItem.coponent';
import ShopItems from './components/ShopItems.component';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { addShopItems, clearShopitemsToAdd } from './components/createSlice';

function App() {
  const items = useSelector((state) => state.shopItems)
  const dispatch = useDispatch();

  function saveItems() {
    if (items.shopItemsToAdd){
      dispatch(addShopItems(items.shopItemsToAdd));
      dispatch(clearShopitemsToAdd());
    }
  }
  return (
    <div className='container'>
      <div className='create-container'>
        <div className='header-container'>
          <h3 className='title'>Create Shop Items</h3>
          <Button variant="contained" onClick={saveItems}>Save items</Button>
        </div>
        <CreateShopItem />
      </div>
      <div className='created-items-container'>
        <ShopItems/>
      </div>
    </div>
  );
}

export default App;
