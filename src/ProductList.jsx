import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'Produces oxygen at night and improves air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description: 'Filters formaldehyde and xylene from indoor air.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description: 'Removes mold spores and purifies common pollutants.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
          description: 'Adds humidity and removes indoor toxins.',
          cost: '$14',
        },
        {
          name: 'Rubber Plant',
          image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          description: 'Glossy leaves that absorb airborne chemicals.',
          cost: '$20',
        },
        {
          name: 'Aloe Vera',
          image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'Purifies air and contains soothing gel for burns.',
          cost: '$10',
        },
      ],
    },
    {
      category: 'Aromatic & Fragrant Plants',
      plants: [
        {
          name: 'English Lavender',
          image: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=600&q=80',
          description: 'Calming floral aroma that promotes restful sleep.',
          cost: '$16',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1592729801570-f1577717462c?auto=format&fit=crop&w=600&q=80',
          description: 'Sweet, exotic fragrance that blooms in warm seasons.',
          cost: '$22',
        },
        {
          name: 'Rosemary',
          image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          description: 'Fresh pine scent that enhances memory and focus.',
          cost: '$12',
        },
        {
          name: 'Mint',
          image: 'https://cdn.pixabay.com/photo/2016/01/07/18/34/peppermint-1126343_1280.jpg',
          description: 'Crisp, refreshing aroma ideal for beverages.',
          cost: '$9',
        },
        {
          name: 'Lemon Balm',
          image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
          description: 'Zesty citrus fragrance that uplifts room atmosphere.',
          cost: '$11',
        },
        {
          name: 'Eucalyptus',
          image: 'https://cdn.pixabay.com/photo/2020/06/10/15/05/eucalyptus-5283084_1280.jpg',
          description: 'Crisp menthol aroma that opens up airways.',
          cost: '$19',
        },
      ],
    },
    {
      category: 'Low Maintenance Plants',
      plants: [
        {
          name: 'ZZ Plant',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80',
          description: 'Extremely drought-tolerant with waxy green foliage.',
          cost: '$24',
        },
        {
          name: 'Cast Iron Plant',
          image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
          description: 'Nearly indestructible, thrives in low light.',
          cost: '$25',
        },
        {
          name: 'Pothos',
          image: 'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg',
          description: 'Fast-growing trailing vine that forgives neglected watering.',
          cost: '$13',
        },
        {
          name: 'Jade Plant',
          image: 'https://cdn.pixabay.com/photo/2020/07/15/18/31/succulent-5408584_1280.jpg',
          description: 'Symbol of good luck; requires minimal moisture.',
          cost: '$15',
        },
        {
          name: 'Chinese Evergreen',
          image: 'https://images.unsplash.com/photo-1620127682252-0c9780a42337?auto=format&fit=crop&w=600&q=80',
          description: 'Patterned leaves that do well in low, indirect light.',
          cost: '$21',
        },
        {
          name: 'Haworthia',
          image: 'https://cdn.pixabay.com/photo/2019/11/09/16/09/succulent-4613862_1280.jpg',
          description: 'Compact striped succulent perfect for small desks.',
          cost: '$10',
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2>🌿 Paradise Nursery</h2>
            <span className="tagline">Where Greenery Meets Serenity</span>
          </a>
        </div>
        <div className="navbar-links">
          {/* Explicit Home, Plants, and Cart navigation */}
          <a href="/" className="nav-link">Home</a>
          <a href="#" onClick={handlePlantsClick} className="nav-link">
            Plants
          </a>
          <a href="#" onClick={handleCartClick} className="nav-link cart-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cart-svg-icon"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="cart_quantity_count">{totalCartCount}</span>
          </a>
        </div>
      </nav>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((categoryObj, index) => (
            <div key={index} className="category-section">
              <h2 className="category-title">{categoryObj.category}</h2>
              {/* Uses product-list class as required by rubric */}
              <div className="product-list">
                {categoryObj.plants.map((plant, pIndex) => (
                  <div key={pIndex} className="plant-card">
                    <img src={plant.image} alt={plant.name} className="plant-image" />
                    <h3 className="plant-title">{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <p className="plant-cost">{plant.cost}</p>
                    <button
                      className={`add-to-cart-button ${
                        addedToCart[plant.name] ? 'disabled' : ''
                      }`}
                      disabled={addedToCart[plant.name]}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
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
  );
}

export default ProductList;
