/* eslint-disable react/prop-types */
import React from 'react';
import { FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';
import './FeaturedProducts.css';

const FeaturedProducts = ({ products }) => {
  // Featured products - selecting a few from different categories
  const featuredItems = [
    products[2], // Remote Control Sports Car
    products[5], // Motivational Self-Help Book
    products[8], // Fiction Novel - Mystery Thriller
    products[10], // LED Glass Dome Rose Gift
  ];

  return (
    <section className="featured-products-section">
      <h2 className="section-title">Featured Products</h2>
      <p className="section-description">
        Discover our most popular items loved by our customers
      </p>

      <div className="products-grid">
        {featuredItems.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-image"
              />
              <div className="heart-icon">
                <FaHeart className="heart-icon-svg" />
              </div>
              <div className={`badge ${index % 2 === 0 ? 'new' : 'sale'}`}>
                {index % 2 === 0 ? 'NEW' : 'SALE'}
              </div>
            </div>

            <div className="product-details">
              <div className="product-info">
                <span className="category">{product.category.toUpperCase()}</span>
                <div className="ratings">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="empty-star" />
                  <span className="rating-value">4.0</span>
                </div>
              </div>

              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>

              <div className="product-footer">
                <span className="price">${(15 + index * 10).toFixed(2)}</span>
                <button className="add-to-cart-btn">
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-btn-container">
        <button className="view-all-btn">View All Products</button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
