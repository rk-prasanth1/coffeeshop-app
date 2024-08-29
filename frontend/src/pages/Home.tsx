import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path based on your image file

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <img src={logo} alt="Coffeeshop Logo" style={{ width: '200px', marginBottom: '20px' }} />
      <h1>Welcome to Coffeeshop</h1>
      <p>Your favorite place for coffee courses!</p>
    </div>
  );
};

export default Home;

