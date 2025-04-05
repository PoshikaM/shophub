import React from 'react';
import { FaShoppingCart, FaSearch, FaUser, FaHeart } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <header 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 5%',
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          animation: 'slideDown 1s ease forwards'
        }}
      >
        <div style={{ fontWeight: 700, fontSize: '1.8rem', color: '#3a86ff' }}>
          ShopHub
        </div>
        
        <nav>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '2rem',
            margin: 0,
            padding: 0
          }}>
            <li style={{ fontWeight: 500 }}>Home</li>
            <li style={{ fontWeight: 500 }}>Shop</li>
            <li style={{ fontWeight: 500 }}>Categories</li>
            <li style={{ fontWeight: 500 }}>About</li>
            <li style={{ fontWeight: 500 }}>Contact</li>
          </ul>
        </nav>
        
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          fontSize: '1.2rem'
        }}>
          <FaSearch style={{ cursor: 'pointer' }} />
          <FaUser style={{ cursor: 'pointer' }} />
          <FaHeart style={{ cursor: 'pointer' }} />
          <div style={{ position: 'relative' }}>
            <FaShoppingCart style={{ cursor: 'pointer' }} />
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              backgroundColor: '#ff006e',
              color: 'white',
              borderRadius: '50%',
              width: '16px',
              height: '16px',
              fontSize: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>3</span>
          </div>
        </div>
      </header>
      
      <section style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8rem 5% 5rem',
        backgroundColor: '#f8f9fa',
        minHeight: '80vh'
      }}>
        <div style={{
          width: '50%',
          paddingRight: '2rem'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            marginBottom: '1.5rem',
            fontWeight: 800,
            lineHeight: 1.1,
            color: '#2b2d42',
            animation: 'fadeUp 0.8s ease forwards',
            opacity: 0,
            transform: 'translateY(50px)'
          }}>Discover Amazing Products For Your Lifestyle</h1>
          
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            color: '#555',
            lineHeight: 1.6,
            animation: 'fadeUp 0.8s ease forwards 0.2s',
            opacity: 0,
            transform: 'translateY(50px)'
          }}>
            Find the perfect items for every occasion with our carefully curated collection of toys, books, and gifts.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem',
            animation: 'fadeUp 0.8s ease forwards 0.4s',
            opacity: 0,
            transform: 'translateY(50px)'
          }}>
            <button style={{
              padding: '0.8rem 2rem',
              backgroundColor: '#3a86ff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Shop Now
            </button>
            
            <button style={{
              padding: '0.8rem 2rem',
              backgroundColor: 'transparent',
              color: '#3a86ff',
              border: '2px solid #3a86ff',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Learn More
            </button>
          </div>
        </div>
        
        <div style={{
          width: '45%',
          display: 'flex',
          justifyContent: 'center',
          animation: 'fadeLeft 1s ease forwards 0.5s',
          opacity: 0,
          transform: 'translateX(100px)'
        }}>
          <img 
            src="https://images.meesho.com/images/products/266492160/7eo7j_400.webp" 
            alt="Featured Product" 
            style={{
              maxWidth: '100%',
              borderRadius: '10px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              transform: 'rotate(-5deg)',
              border: '10px solid white'
            }}
          />
        </div>
      </section>

      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;