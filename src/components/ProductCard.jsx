import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    console.log(`Added ${product.title} to cart`);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-link">
        <img
          src={product.image}
          alt={product.title}
          className="product-card-img"
        />
      </Link>
      <div className="product-card-body">
        <h3 className="product-card-title">{product.title}</h3>
        <p className="product-card-price">₹{product.price}</p>
        <div className="product-card-actions">
          <Link to={`/product/${product.id}`} className="product-card-button">
            View Details
          </Link>
          <button onClick={handleAddToCart} className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
