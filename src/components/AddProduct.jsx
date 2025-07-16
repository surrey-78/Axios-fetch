import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddProduct.css';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image_url: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Submitting Product:', product); 

  try {
    await axios.post('http://localhost:5000/products', product);
    alert('Product added successfully!');
    setProduct({ name: '', description: '', price: '', image_url: '' });
  } catch (err) {
    console.error('Error adding product:', err);
  }
};

  return (
    <div className="add-product-wrapper">
      <div className="add-product-card">
        <h2>Add New Product</h2>

        {message && <p style={{ color: message.startsWith('✅') ? 'green' : 'red' }}>{message}</p>}

        <form className="add-product-form" onSubmit={handleSubmit}>
          <label>
            Product Name
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
              placeholder="Enter product name"
            />
          </label>

          <label>
            Description
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              required
              placeholder="Enter product description"
            />
          </label>

          <label>
            Price (₹)
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              step="0.01"
              placeholder="Enter product price"
            />
          </label>

          <label>
            Image URL
            <input
              type="url"
              name="image_url"
              value={product.image_url}
              onChange={handleChange}
              required
              placeholder="https://example.com/image.jpg"
            />
          </label>

          <button type="submit" disabled={loading}>
            {loading ? 'Adding...' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
