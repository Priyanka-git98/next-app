"use client";
import { useState, useEffect } from 'react';

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        {/* used inline styling */}
      <h3 style={{color:'orange'}}>Fetch API data in client component/Product List</h3>
      {products.map((item) => (
        <div key={item.id}>
          <h3>Name: {item.title}, Price: {item.price}</h3>
        </div>
      ))}
    </div>
  );
}
