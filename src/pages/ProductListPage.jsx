import { Link } from "react-router-dom";
import "../ListPage.css";
import React, { useEffect, useState } from "react";
import ProductDetailsPage from "./ProductDetailsPage";

function ProductListPage() {
  const [products, setProducts] = useState([]);
 /*  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); */

  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      
      if (response.ok) {
        const productsData = await response.json();
        setProducts(productsData);
      } else {
        console.error(`Failed to fetch product details. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    console.log('component mounted');
    fetchData();
  }, []);


  /* useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setProducts(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  } */

  return (
    <div className="ProductListPage">
      
      {products.map(product => (
        <Link to={`/product/details/${product.id}`} key={product.id}>
        <div className="Product">
          <img src={product.image} alt={product.title}/>
          <h3><b>{product.title}</b></h3>
          <p>{product.category}</p>
          <p>${product.price}</p>
          <p className="description">{product.description}</p>   
          <ProductDetailsPage />  
        </div>
        </Link> 
      ))}
    </div>
  );
}

export default ProductListPage;









/* import {useEffect, useState } from "react";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=> {
        console.log(json);
        setProducts(json);
    })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, [] );  //  <-- [] Means the effect will run only once, when the component mounts
  
  return (
    <div className="ProductListPage">
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;
 */