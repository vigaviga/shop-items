import './App.css';
import CreateShopItem from './components/CreateShopItem.coponent';
import ShopItems from './components/ShopItems.component';
import Button from '@mui/material/Button';
import ShopListItem from './components/ShopListItem.component'
import shortid from 'shortid'

function App() {
  let item = [
    {
      id: shortid.generate(),
      Name: "banan1",
      Price: "1001",
      Weight: 101,
      StartDate: new Date(1),
      EndDate: new Date(3)
    },
    {
      id: shortid.generate(),
      Name: "banan2",
      Price: "1002",
      Weight: 102,
      StartDate: new Date(2),
      EndDate: new Date(5)
    },
    {
      id: shortid.generate(),
      Name: "bana3n",
      Price: "1003",
      Weight: 104,
      StartDate: new Date(4),
      EndDate: new Date(7)
    }
    ,
    {
      id: shortid.generate(),
      Name: "bana3n",
      Price: "1003",
      Weight: 104,
      StartDate: new Date(4),
      EndDate: new Date(7)
    }
    ,
    {
      id: shortid.generate(),
      Name: "bana3n",
      Price: "1003",
      Weight: 104,
      StartDate: new Date(4),
      EndDate: new Date(7)
    }
  ]

  return (
    <div className='container'>
      <div className='create-container'>
        <div className='header-container'>
          <h3 className='title'>Create Shop Items</h3>
          <Button variant="contained">Save items</Button>
        </div>
        <CreateShopItem />
      </div>
      <div className='created-items-container'>
        <ShopItems shopItems = {item}/>
      </div>

    </div>
  );
}

export default App;
