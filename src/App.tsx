import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./pages/Cart";
import DesignLab from "./pages/DesignLab";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductsPage from "./pages/ProductsPage";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route
              path="register"
              element={user ? <Navigate to="/" replace={true} /> : <Register />}
            />
            <Route
              path="login"
              element={user ? <Navigate to="/" replace={true} /> : <Login />}
            />
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
