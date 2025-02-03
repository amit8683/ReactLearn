import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NestedHome = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to Our Hospital</h1>
      <p style={styles.description}>
        Our hospital is dedicated to providing top-notch healthcare services with modern facilities
        and experienced medical professionals. We ensure the best treatment with a patient-centric approach.
      </p>
      <div style={styles.navContainer}>
        <Link to="about" style={styles.link}>About</Link>
        <Link to="contact" style={styles.link}>Contact</Link>
      </div>
      <Outlet />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  header: {
    color: '#2c3e50',
  },
  description: {
    maxWidth: '600px',
    margin: '10px auto',
    fontSize: '18px',
    lineHeight: '1.5',
    color: '#34495e',
  },
  navContainer: {
    marginTop: '20px',
  },
  link: {
    margin: '0 15px',
    textDecoration: 'none',
    color: '#2980b9',
    fontSize: '20px',
    fontWeight: 'bold',
  },
};

export default NestedHome;