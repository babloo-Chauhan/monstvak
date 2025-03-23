import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../pages/Card'



const Product = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/chandliers'); // Replace with your API endpoint
        setProducts(response.data);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((item) => (
          
          <Card key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;