import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './Components/Navbar';
import Card2 from './Components/Card';
import DarkVariantExample from './Components/Carousle';
import Footer from './Components/Footer';

function App() {
  const style = {
    fontSize: "26px",
    textAlign: "center",
    padding: "20px 0"
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <NavScrollExample />
      <DarkVariantExample />
      <h1 style={style}>Products</h1>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
        {products.map((product) => (
          <Card2 
          title={product.title}
          img={product.image}/>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
