import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./SearchResults.css";

const SearchResults = () => {
  const { searchTerm } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.bazaronline-apiservice.somee.com/api/Products?searchTerm=${searchTerm}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearch = () => {
    // Redireccionar a la página de resultados de búsqueda con el nuevo término de búsqueda
    window.location.href = `/searchProducts/${searchInput}`;
  };

  return (
    <div className="container mt-5">
      <Link
        to="/"
        className="btn btn-primary btn-sm position-absolute"
        style={{ top: "1rem", left: "1rem" }}
      >
        Volver
      </Link>

      <div className="mb-4">
        <br />

        <div className="input-group">
          <input
            type="text"
            className="form-control mx-3"
            placeholder="Buscar productos..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Buscar
          </button>
        </div>
        <p>Resultado de la búsqueda de {searchTerm}</p>
      </div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="row">
          {products.length === 0 ? (
            <p>No se encontraron resultados.</p>
          ) : (
            products.map((product) => (
              <div key={product.ProductID} className="col-md-4 mb-4">
                <div className="card">
                  <img
                    src={product.ThumbnailUrl}
                    alt={product.Title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.Title}</h5>
                    <p className="card-text">${product.Price}</p>
                    <span className="card-text2">{product.Description}</span>
                    <br />
                    <Link
                      to={`/product/${product.ProductID}`}
                      className="btn btn-primary my-3"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
