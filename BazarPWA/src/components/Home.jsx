import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navegar a la vista de resultados de búsqueda con el término de búsqueda
    navigate(`/searchProducts/${searchTerm}`);
  };

  return (
    <div className="container mt-5">
      <img
        src="https://cdn-icons-png.flaticon.com/128/10645/10645452.png"
        alt="Bazar online"
      />
      <h1 className="mb-4">Bazar Online</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
};

export default Home;
