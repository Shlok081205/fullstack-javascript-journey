/**
 * Create a react apllication  using functional componets and react router dom.requirements. Create roots for Home,Shop,COntact and 404not found . 2Implement navigation using link
 */

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import NoPage from "./NoPage";

function My() {
  return (
    <div>
      <Router>
        {/* Corrected "class" attribute to "className" for React compatibility */}
        <div className="main-route">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            {/* Added missing forward slash '/' */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <Routes>
          {/* Fixed the missing closing angle bracket on the Home element */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default My;
