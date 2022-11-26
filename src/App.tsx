import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import DesignLab from "./pages/DesignLab";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="designlab" element={<DesignLab />} />
            <Route path="cart" element={<Cart />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="/products/:id">
              <Route index element={<SingleProduct />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
