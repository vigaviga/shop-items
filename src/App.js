import './App.css';
import CreateShopItem from './components/CreateShopItem.coponent';
import ShopItems from './components/ShopItems.component';
import Button from '@mui/material/Button';
import ShopListItem from './components/ShopListItem.component'


function App() {
  let item = [
    {
      id: 1,
      Name: "banan1",
      Price: "1001",
      Weight: 101,
      StartDate: new Date(1),
      EndDate: new Date(3)
    },
    {
      id: 2,
      Name: "banan2",
      Price: "1002",
      Weight: 102,
      StartDate: new Date(2),
      EndDate: new Date(5)
    },
    {
      id: 3,
      Name: "bana3n",
      Price: "1003",
      Weight: 104,
      StartDate: new Date(4),
      EndDate: new Date(7)
    }
  ]

  return (
    <div>
      <div className='create-container'>
        <div className='header-container'>
          <h3 className='title'>Create Shop Items</h3>
          <Button variant="contained">Save items</Button>
        </div>
        <CreateShopItem />
      </div>
      <ShopItems shopItems = {item}/>

    </div>
  );
}

export default App;
