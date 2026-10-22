import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from './CartSlice'
import CartItem from './CartItem'
import './ProductList.css'

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
        description: 'Produces oxygen at night, improving air quality.',
        cost: 15,
      },
      {
        name: 'Spider Plant',
        image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
        description: 'Filters formaldehyde and xylene from the air.',
        cost: 12,
      },
      {
        name: 'Peace Lily',
        image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
        description: 'Removes mold spores and purifies the air.',
        cost: 18,
      },
      {
        name: 'Boston Fern',
        image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
        description: 'Adds humidity to the air and removes toxins.',
        cost: 20,
      },
      {
        name: 'Rubber Plant',
        image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
        description: 'Easy to care for and effective at removing toxins.',
        cost: 17,
      },
      {
        name: 'Aloe Vera',
        image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
        description: 'Purifies the air and has healing properties for skin.',
        cost: 14,
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=600&auto=format&fit=crop',
        description: 'Calming scent, used in aromatherapy.',
        cost: 20,
      },
      {
        name: 'Jasmine',
        image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=600&auto=format&fit=crop',
        description: 'Sweet fragrance, promotes relaxation.',
        cost: 18,
      },
      {
        name: 'Rosemary',
        image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
        description: 'Invigorating scent, often used in cooking.',
        cost: 15,
      },
      {
        name: 'Mint',
        image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
        description: 'Refreshing aroma, used in teas and cooking.',
        cost: 12,
      },
      {
        name: 'Lemon Balm',
        image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
        description: 'Citrusy scent, relieves stress and promotes sleep.',
        cost: 14,
      },
      {
        name: 'Hyacinth',
        image: 'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
        description: 'Flowering bulb known for its strong, sweet fragrance.',
        cost: 22,
      },
    ],
  },
  {
    category: 'Medicinal Plants',
    plants: [
      {
        name: 'Echinacea',
        image: 'https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg',
        description: 'Boosts the immune system and helps fight colds.',
        cost: 16,
      },
      {
        name: 'Peppermint',
        image: 'https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg',
        description: 'Relieves digestive issues and headaches.',
        cost: 13,
      },
      {
        name: 'Chamomile',
        image: 'https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg',
        description: 'Soothes anxiety and helps with sleep.',
        cost: 15,
      },
      {
        name: 'Calendula',
        image: 'https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg',
        description: 'Heals wounds and soothes skin irritations.',
        cost: 12,
      },
      {
        name: 'Tulsi',
        image: 'https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg',
        description: 'Holy basil, used for coughs, colds and stress relief.',
        cost: 11,
      },
      {
        name: 'Oregano',
        image: 'https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg',
        description: 'Has antibacterial properties and aids digestion.',
        cost: 10,
      },
    ],
  },
]

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false)
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const isInCart = (name) => cartItems.some((item) => item.name === name)

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant))
  }

  const handleHomeClick = (e) => {
    e.preventDefault()
    onHomeClick()
  }

  const handlePlantsClick = (e) => {
    e.preventDefault()
    setShowCart(false)
  }

  const handleCartClick = (e) => {
    e.preventDefault()
    setShowCart(true)
  }

  const handleContinueShopping = (e) => {
    e.preventDefault()
    setShowCart(false)
  }

  return (
    <div>
      <nav className="navbar">
        <a href="#" className="brand" onClick={handleHomeClick}>
          <span className="brand-logo">🌿</span>
          <div>
            <h3>Paradise Nursery</h3>
            <i>Where Green Meets Serenity</i>
          </div>
        </a>

        <div className="nav-links">
          <a href="#" onClick={handleHomeClick}>Home</a>
          <a href="#" onClick={handlePlantsClick}>Plants</a>
          <a href="#" onClick={handleCartClick} className="cart-link" aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="38" height="38">
              <circle cx="80" cy="216" r="12" fill="#fff"></circle>
              <circle cx="184" cy="216" r="12" fill="#fff"></circle>
              <path
                d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></path>
            </svg>
            <span className="cart-count">{totalItems}</span>
          </a>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((section) => (
            <div key={section.category} className="category">
              <h2 className="category-title">{section.category}</h2>
              <div className="product-list">
                {section.plants.map((plant) => (
                  <div className="product-card" key={plant.name}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">{plant.description}</div>
                    <div className="product-price">${plant.cost}</div>
                    <button
                      className={`product-button ${isInCart(plant.name) ? 'added-to-cart' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.name)}
                    >
                      {isInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  )
}

export default ProductList
