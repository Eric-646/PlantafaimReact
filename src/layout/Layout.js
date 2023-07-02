import { Routes, Route, Link } from "react-router-dom";
import About from "pages/About/About";
import Home from "pages/Home/Home";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Layout.scss";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <div class="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
