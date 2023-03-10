import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar/NavBar";
import Shop from "./components/Shop/Shop";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/not-found" />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
