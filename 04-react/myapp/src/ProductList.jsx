/**
 * 
Build a react app that displays a list of products using props
1.create a product card component to show product details like title,price,ratings and image
2.use a product list component to store product data and display multiple card component
make two files ProductList.jsx and ProductCard.jsx
 */

import ProductCard from "./ProductCard.jsx";
import img1 from "./assets/hero.png";
import img2 from "./assets/images.jpeg";

function ProductList() {
  const products = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      price: 2999,
      rating: 4.5,
      image: img1,
    },
    {
      id: 2,
      title: "Fresh Botanical Bouquet",
      price: 499,
      rating: 4.8,
      image: img2,
    },
  ];
  return (
    <div>
      <h1>Our Products</h1>
      <ProductCard p={products} />
    </div>
  );
}

export default ProductList;
