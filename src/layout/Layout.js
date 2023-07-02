import { Routes, Route } from "react-router-dom";

import TodoSingle from "pages/TodoSingle/TodoSingle";
import Home from "pages/Home/Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./Layout.scss";

function Layout() {
  return (
    <div className="Layout">
      <Header />
      <div class="container">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todo/:id" element={<TodoSingle />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
