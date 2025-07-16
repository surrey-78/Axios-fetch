import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/Cartcontext';
import '../styles/ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);  
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.error('Error fetching product:', err);
        setError('Failed to load product. Please try again later.');
      });
  }, [id]);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!product) return <p>Loading product details...</p>;

  const { name, description, price, image_url } = product;

  return (
    <div className="product-detail" style={styles.container}>
      <img src={image_url} alt={name} style={styles.image} />
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>₹{price}</h3>
      <button style={styles.button} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: 'auto',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 0 15px rgba(0,0,0,0.2)',
    backgroundColor: 'rgba(7, 0, 39, 1)',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '1rem',
  },
};

export default ProductDetail;
