import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <>
      <h2 className="text-center mt-3">Cart Items</h2>
      <div  style={{backgroundColor:'silver'}}>
        {cartItems.length === 0 && <div className="text-center mt-3">Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row p-1">
            <div className="col-4">{item.name}</div>
            <div className="col-2">
              <button className="btn btn-danger" onClick={() => onRemove(item)}>
                -
              </button>{' '}
              <button className="btn btn-primary" onClick={() => onAdd(item)}>
                +
              </button>
            </div>

            <div className="col-4 text-center">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-4 text-center">${itemsPrice.toFixed(2)}</div>
             
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-4 text-center">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-4 text-center">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-4 text-center">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row mt-2">
              <button className="btn btn-success" onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
