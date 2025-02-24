import './App.css';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';
import OrderActions from './components/OrderActions'

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

import React, { useState } from 'react';

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

const logoImgName = 'j_bites_logo.png';

const slogans = ['Fresh, Savory, Authentic', 'From Japan to Campus'];

function App() {
  const [total, setTotal] = useState(0);
  const [itemCounts, setItemCounts] = useState(new Map());

  return (
    <div>
      <MenuHeader logoImgName={logoImgName} slogan1={slogans[0]} slogan2={slogans[1]} />
      <div className="menu">
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
        { menuItems.map((id) => (
          <MenuItem 
            id={id}
            itemCounts={itemCounts}
            setItemCounts={setItemCounts}
            setTotal={setTotal}
          />
        ))}
      </div>
      <OrderActions 
        subtotal={total}
        setTotal={setTotal}
        itemCounts={itemCounts}
        setItemCounts={setItemCounts}
      />
    </div>
  );
}

export default App;
