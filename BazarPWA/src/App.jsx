import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas */}
        <Route path="/" element={<Home />} />
        <Route path="/searchProducts/:searchTerm" element={<SearchResults />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
