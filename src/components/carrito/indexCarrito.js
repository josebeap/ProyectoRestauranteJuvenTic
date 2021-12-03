import HeaderSimple from '../HeaderSimple';
import Main from './Main';

import data from '../../data/data';

import { useState } from 'react';

import Cart from './Cart';

function Carrito() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
   
  const addProduct=(product)=>{
    const productExist=cartItems.find((item)=>item.id===product.id);
    
    if(productExist){
        setCartItems(cartItems.map((it)=> it.id===product.id ?
        {...productExist, quantity: productExist.quantity+1} : it));
    
    }
    else
    {
        setCartItems([...cartItems, {...product, quantity:1}]);

    }
}

const restProduct=(product)=>{
    const productExist=cartItems.find((item)=>item.id===product.id);

    if(productExist.quantity===1){
        setCartItems(cartItems.filter((item)=> item.id !== product.id));
    }
    else
    {
        setCartItems(cartItems.map((item)=>item.id===product.id ? {...productExist, quantity: productExist.quantity-1}:item));
    }
}

const cleanAll=()=>{
  setCartItems([]);
  
}


  return (
    <div className="App">
      <HeaderSimple countCartItems={cartItems.length}></HeaderSimple>
      <Cart cartItems={cartItems} addProduct={addProduct} restProduct={restProduct} cleanAll={cleanAll}/>
      <div className="row p-5">
        <Main products={products} addProduct={addProduct}></Main>
      </div>
    </div>
  );
}

export default Carrito;
