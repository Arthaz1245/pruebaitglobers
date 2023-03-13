import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <NavBar>
                <Cart />
              </NavBar>
            }
          />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/not-found" />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
