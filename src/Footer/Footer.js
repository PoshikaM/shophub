import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#2b2d42',
      color: 'white',
      padding: '3rem 5%',
      textAlign: 'center'
    }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '600',
          marginBottom: '1rem',
        }}>
          Stay Connected
        </h2>
        <p style={{
          fontSize: '1rem',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.6
        }}>
          Follow us on social media for the latest updates, promotions, and more.
        </p>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        <a href="https://facebook.com" style={{
          color: 'white',
          fontSize: '1.5rem',
          transition: 'color 0.3s ease'
        }} target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" style={{
          color: 'white',
          fontSize: '1.5rem',
          transition: 'color 0.3s ease'
        }} target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" style={{
          color: 'white',
          fontSize: '1.5rem',
          transition: 'color 0.3s ease'
        }} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" style={{
          color: 'white',
          fontSize: '1.5rem',
          transition: 'color 0.3s ease'
        }} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>

      <div style={{
        fontSize: '0.9rem',
        marginBottom: '1rem',
        color: '#ccc'
      }}>
        <p>© 2025 Your Company. All Rights Reserved.</p>
      </div>

      <div>
        <a href="/privacy-policy" style={{
          color: '#3a86ff',
          fontSize: '0.9rem',
          textDecoration: 'none',
          marginRight: '1rem'
        }}>Privacy Policy</a>
        <a href="/terms-of-service" style={{
          color: '#3a86ff',
          fontSize: '0.9rem',
          textDecoration: 'none'
        }}>Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
