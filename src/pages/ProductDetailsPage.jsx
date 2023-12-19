import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../ProductPage.css";

function ProductDetailsPage() {

  const { productId } = useParams();
  const [product, setProduct] = useState({});
 /*  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); */

  const fetchData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      
      if (response.ok) {
        const productData = await response.json();
        setProduct(productData);
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
  }, [productId]);


 /*  useEffect(() => {
  fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(res => res.json())
  .then(json => {
    console.log(json);
    setProduct(json);
    setLoading(false);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    setError(error);
    setLoading(false);
  });
}, [productId]);

if (loading) {
  return <p>Loading...</p>;
}

if (error) {
  return <p>Error: {error.message}</p>;
} */

  return (
    <div className="ProductDetailsPage">
          <img src={product.image} alt={product.title}/>
          <h3><b>{product.title}</b></h3>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <p className="description">{product.description}</p>
          <Link to="/">
          <button className="btn-secondary" type="button">Back</button>
          </Link> 
    </div>
  );
}

export default ProductDetailsPage;
