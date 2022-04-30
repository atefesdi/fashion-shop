import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Shop from "./pages/shop";
import Cart from "./pages/Cart";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
