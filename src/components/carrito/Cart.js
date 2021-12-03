import React from "react";
import "./cart.css"

const Cart=({cartItems, addProduct, restProduct, cleanAll})=>{

    const totalPrice=cartItems.reduce((price, item)=>price+item.quantity*item.price, 0);
   
    return(
        <>
            <div className="cart-item">
                <h2 className="cart-item-header">Carrito de Compras</h2>
                  <div className="clear-cart">
                   {cartItems.length >=1 && (
                        <button className="clear-cart-button" onClick={cleanAll}>Limpiar todo</button>
                    )} 
                </div>
 
                {cartItems.length === 0 && (<p className="cart-item-empty">No se han agregado prodcutos</p>)}
            
                <div>
                    {cartItems.map((it)=>(
                        <div key={it.id} className="cart-item-list">
                            <img className="cart-item-img" src={it.image} alt=""/>
                            <div className="cart-item-name">{it.name}</div>
                          <div className="cart-item-function">
                                <button className="cart-item-add" onClick={()=>addProduct(it)}>+</button>
                                <button className="cart-item-remove"  onClick={()=>restProduct(it)}>-</button>
                            </div>
                            <p className="cart-item-price">
                                {it.quantity} * ${it.price} = {it.quantity * it.price}
                            </p>
                    </div>
                    ))}
                </div>
                
                <div className="cart-item-total-price-name">
                    Precio total
                      <p className="cart-item-total-price">${totalPrice}</p>
                </div>
                
                <div>
                    {cartItems.length >=1 && (
                        <button>Realizar compra</button>
                    )}
                </div>
            </div>
        </>
    )



}

export default Cart;