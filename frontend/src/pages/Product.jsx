import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../pages/Card';
import { getSubCategories } from '../context/SubCategoryContext';
import { useLocation } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const { categoryId } = location.state || {};


console.log("categoryId", categoryId);

  const [selectedCategory, setSelectedCategory] = useState(
    categoryId ? categoryId : "All"
  );
  

  
  const filteredChandeliers =
    
    selectedCategory === "All"
      ? products
      : products.filter((c) => c.subCategory[0] === selectedCategory);
      console.log("selectedCategory", selectedCategory);
   

  const [subCategories, setSubCategories] = useState([]);

  // console.log("subcategory", subCategories.data.data);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const subCategoriesData = await getSubCategories();
        setSubCategories(subCategoriesData);
      } catch (err) {
        console.error("Failed to fetch subcategories:", err);
      }
    };

    fetchSubCategories();
  }, []);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/products'); // Replace with your API endpoint
        setProducts(response.data.data);
        
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
<>
 <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold">CHANDILIERS</h2>
      <p className="text-gray-600 mt-2">
        Whether you wish to decorate your space with the ever-loved Grand Crystal 
        Beauties or need to add trending & stylish minimalist lights to your 
        modern interiors, we bring them all.
      </p>
      <p className="mt-2 text-gray-600">All our chandeliers come with smart features and are Alexa-enabled.</p>

      {/* Dropdown Filter */}
    
      <div className="mt-4">
        <label className="font-semibold text-gray-700">Filter by:</label>
        <select
          className="ml-2 p-2 border rounded"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          if(categoryId){
         <option value={categoryId}>{subCategories?.data?.data?.map((c)=>{c._id===categoryId})}</option>}
         else{
<option value="All">All</option>
         }

        {subCategories?.data?.data?.map((subcategory) => (
          <option key={subcategory._id} value={subcategory._id}>
            {subcategory.name}
          </option>
        ))}
         
        </select>
      </div>

      {/* Filtered Product List */}
      {/* <ul className="mt-6 space-y-2">
        {filteredChandeliers.map((chandelier) => (
          <li key={chandelier.id} className="p-4 border rounded shadow">
            {chandelier.name}
          </li>
        ))}
      </ul> */}
    </div>




    <div className='flex justify-center'>
      <div className="my-12 grid  lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
        {filteredChandeliers.map((item) => (
          
          <Card key={item._id} item={item} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Product;