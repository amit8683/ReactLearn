import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>This is my About us page</h1>
      <p style={styles.paragraph}>Welcome to our about page. Here, we share information about our company and mission. Stay tuned for more updates!</p>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#e9ecef',
    borderRadius: '8px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    color: '#333',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  paragraph: {
    color: '#555',
    fontSize: '1.2rem',
    lineHeight: '1.6',
  },
};

export default About;
