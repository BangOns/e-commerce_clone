import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";
import Register from "./components/register/Register";
import RegisterAdmin from "./components/register/RegisterAdmin";
import EditProducts from "./components/Product/UpdateProduct";
import TambahProducts from "./components/Product/TambahProduct";
import MyProduct from "./components/myProduct/myProduct";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="registerAdmin" element={<RegisterAdmin />} />
          <Route path="tambahProduct" element={<TambahProducts />} />
          <Route path="myProduct" element={<MyProduct />} />
          <Route path="editProduct/:id" element={<EditProducts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
