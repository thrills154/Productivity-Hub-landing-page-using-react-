import React, { useState } from 'react';

const ProductivityHub = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState({ text: '', isError: false });

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscribe = () => {
    if (!email.trim()) {
      setMessage({ text: 'Please enter your email.', isError: true });
      return;
    }
    setMessage({ text: 'Thanks for subscribing!', isError: false });
    setEmail('');
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1>Productivity Hub</h1>
        <nav>
          <a href="#features" style={styles.navLink}>Features</a>
          <a href="#newsletter" style={styles.navLink}>Newsletter</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <h2 style={styles.heroH2}>Organize. Focus. Achieve.</h2>
        <p style={styles.heroP}>A simple tool to help you manage tasks and stay productive every day.</p>
        <button style={styles.button} onClick={() => handleScrollTo('features')}>
          See Features
        </button>
      </section>

      <main id="features" style={styles.features}>
        <div style={styles.feature}>
          <h3 style={styles.featureH3}>✔ Easy Task Lists</h3>
          <p>Keep your daily tasks organized without distractions.</p>
        </div>
        <div style={styles.feature}>
          <h3 style={styles.featureH3}>✔ Habit Tracking</h3>
          <p>Build new habits with a simple, clear tracker.</p>
        </div>
        <div style={styles.feature}>
          <h3 style={styles.featureH3}>✔ Minimal Dashboard</h3>
          <p>Focus only on what matters with a clutter-free dashboard.</p>
        </div>
      </main>

      <section id="newsletter" style={styles.newsletter}>
        <h2>Join Our Newsletter</h2>
        <p>Get productivity tips delivered to your inbox.</p>
        <input
          type="email"
          id="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <button style={styles.button} onClick={handleSubscribe}>
          Subscribe
        </button>
        {message.text && (
          <p style={{
            ...styles.message,
            color: message.isError ? 'red' : '#2e7d32'
          }}>
            {message.text}
          </p>
        )}
      </section>

      <footer id="contact" style={styles.footer}>
        <p>Contact us: hello@productivityhub.com</p>
        <p>© 2025 Productivity Hub</p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    margin: 0,
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fafafa',
    color: '#2d2d2d',
  },
  header: {
    backgroundColor: '#2e7d32',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
  },
  navLink: {
    color: 'white',
    margin: '0 1rem',
    textDecoration: 'none',
    fontWeight: '500',
  },
  hero: {
    padding: '3rem 1.5rem',
    textAlign: 'center',
    backgroundColor: '#a5d6a7',
  },
  heroH2: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  heroP: {
    marginBottom: '1.2rem',
    fontSize: '1.1rem',
  },
  button: {
    padding: '0.6rem 1.2rem',
    background: '#2e7d32',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  features: {
    padding: '2.5rem 1.5rem',
    maxWidth: '900px',
    margin: 'auto',
  },
  feature: {
    marginBottom: '2rem',
  },
  featureH3: {
    color: '#2e7d32',
    marginBottom: '0.5rem',
  },
  newsletter: {
    background: '#e8f5e9',
    padding: '2rem 1.5rem',
    textAlign: 'center',
  },
  input: {
    padding: '0.5rem',
    width: '220px',
    maxWidth: '80%',
    border: '1px solid #ccc',
    borderRadius: '3px',
    marginRight: '0.5rem',
  },
  message: {
    marginTop: '1rem',
    fontWeight: '500',
  },
  footer: {
    background: '#f1f1f1',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
    marginTop: '2rem',
  },
};

export default ProductivityHub;