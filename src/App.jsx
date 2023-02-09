import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import MenuMobile from "./components/NavBar/MenuMobile/MenuMobile";
import Products from "./pages/Products";
import DisplayProduct from "./pages/DisplayProduct";
import Container from "./layout/Container";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import User from "./pages/User";
import Edit from "./pages/Edit";
function App() {
  return (
    <Router>
      <MenuMobile />
      <NavBar />
      <Container>
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/:id" element={<DisplayProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user" element={<User />}></Route>
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
