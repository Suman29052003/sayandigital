import React, { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../../baseURL';
import ProductCard from '../Cards/ProductCard';

const MoreProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${baseURL}/api/products/`);
            console.log(response.data); // Log the entire response
            setProducts(response.data); // Set the products state with the fetched data
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    fetchProducts(); // Call the fetch function
}, []); 

  return (
    <div className="w-full grid gap-y-6 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
      {/* Section Title with decorative lines */}
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <div className="h-[1px] bg-gray-300 flex-grow"></div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold whitespace-nowrap text-[#A2A2A2]">
          More Products
        </h2>
        <div className="h-[1px] bg-gray-300 flex-grow"></div>
      </div>
      
      {/* Grid container */}
      <div className="grid grid-cols-3 gap-3 sm:gap-5 mx-auto">
      {products.map((product) => (
    <ProductCard 
        key={product._id} 
        title={product.name} 
        image={product.image} 
        price={product.price} 
        subTitle={product.description} 
    />
))}

      </div>
    </div>
  );
}

export default MoreProducts;