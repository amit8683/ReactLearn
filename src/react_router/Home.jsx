import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>This is my home page</h1>
      <Link to="/about" style={styles.link}>Click to direct to About us page</Link>
      
    </div>
  );
};


const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
  },
  heading: {
    color: '#333',
    fontSize: '2rem',
  },
  link: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default Home;
