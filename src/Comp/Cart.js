import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
  }, []);

  const handleAddToCart = (item) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItems(updatedCartItems);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    } else {
      const updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updatedCartItems);
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    }
  };

  const handleQuantityChange = (id, value) => {
    const itemIndex = cartItems.findIndex(item => item.id === id);
    
    if (itemIndex !== -1) {
      const updatedCart = [...cartItems];
      const updatedQuantity = updatedCart[itemIndex].quantity + value;
      
      if (updatedQuantity <= 0) {
        updatedCart.splice(itemIndex, 1);
      } else {
        updatedCart[itemIndex].quantity = updatedQuantity;
      }
      
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };
  

  const handleRemoveItem = (id) => {
    console.log(id)
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      if (item.quantity) {
        return total + (Number(item.price) * Number(item.quantity));
      }
      return total;
    }, 0);
    return totalPrice.toFixed(2);
  };
  const handleShowMoreClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div>
    <div className='bg' style={{ textAlign: 'center' }}>
      <h1 className='con stl'>
        Shopping Cart
      </h1>
      </div>
      <div className='con'>
        {cartItems.length > 0 ? (
          cartItems.map(({ id, name, price, cover, quantity }) => (
            <div className='col-sm-4 mb-3 con' key={id}>
              <div>
                <img src={cover} className='prodImg mb-3' alt={name} style={{ width: '30%', height: '150px', borderRadius: '20px' }} />
                <div>
                  <h2 style={{ color: 'red', fontWeight: 'bolder' }}>{name}</h2>
                  <p style={{ color: 'black' }}>{price.toString()}</p>
                  <div>
                    <button onClick={() => handleQuantityChange(id, -1)}>-</button>
                    <span style={{ margin: '0 10px' }}>{quantity}</span>
                    <button onClick={() => handleQuantityChange(id,1,quantity)}>+</button>
                  </div>
                  <button type="button" className="btn btn-danger" onClick={() => handleRemoveItem(id)}>Remove</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>Your cart is empty.</h1>
        )}
        {cartItems.length > 0 && (
          <div>
            <p>Total price: ${getTotalPrice()}</p>
            <Link to='/contact'>
              <button  type="button" className="btn btn-danger" onClick={handleShowMoreClick}>Check out</button>
            </Link>
          </div>
        )}
      </div>
      </div>
  );
        }
  export default Cart
