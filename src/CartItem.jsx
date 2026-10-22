import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, updateQuantity } from './CartSlice'
import './CartItem.css'

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  // total for the whole cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.cost * item.quantity, 0)
  }

  // total for one plant
  const calculateTotalCost = (item) => {
    return item.cost * item.quantity
  }

  const handleContinueShopping = (e) => {
    onContinueShopping(e)
  }

  const handleCheckoutShopping = () => {
    alert('Coming Soon')
  }

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))
  }

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))
    } else {
      dispatch(removeItem(item.name))
    }
  }

  const handleRemove = (item) => {
    dispatch(removeItem(item.name))
  }

  return (
    <div className="cart-container">
      <h2 className="total-amount">Total Cart Amount: ${calculateTotalAmount()}</h2>

      {cart.length === 0 && <p className="cart-empty">Your cart is empty.</p>}

      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">${item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button" onClick={() => handleDecrement(item)}>
                  -
                </button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button" onClick={() => handleIncrement(item)}>
                  +
                </button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <button className="continue-button" onClick={(e) => handleContinueShopping(e)}>
          Continue Shopping
        </button>
        <button className="checkout-button" onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </div>
  )
}

export default CartItem
