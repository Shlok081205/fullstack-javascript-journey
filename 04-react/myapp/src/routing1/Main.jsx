/**
Create a react app to perform a following task.
1.make main.jsx to setup the router and define the routes
2.home.jsx for the home page
3.product.jsx for the product page
4.create a react router include two routes /home and /product and implement navigation between these routes
5.When a user clicks on the home page link it should navigate to the home pageand display welcome to our shop with <h1> tag with blue color also include link to product page
6.A product page that displays 3 product infomation name,price and image using props
7.When a user clicks on the product page link it should navigate to product page and should display product information.
8.Compulsary a No page with 404 Page not found
*/

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import NoPage from "./NoPage";
import img1 from "/home/shlok/College/SemIV/FSD2/04-react/myapp/src/assets/images.jpeg";

function Main() {
  const products = [
    { name: "P1", price: 20000, pic: img1 },
    { name: "P2", price: 5600, pic: img1 },
    { name: "P3", price: 100, pic: img1 },
  ];
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/product">PRODUCTS</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product info={products} />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Main;
