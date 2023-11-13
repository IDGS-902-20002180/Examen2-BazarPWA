import { useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./ProductDetail.css";
import BackButton from "./BackButton";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.bazaronline-apiservice.somee.com/api/Products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  const handleThumbnailClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="container mt-5">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <BackButton />
          <h2 className="mb-4">{product.Title}</h2>
          <span>{product.Category}</span>

          <div className="d-flex flex-wrap justify-content-center mb-3">
            {product.ProductImages.map((image) => (
              <img
                key={image.ImageID}
                src={image.ImageUrl}
                alt={`Thumbnail ${image.ImageID}`}
                onClick={() => handleThumbnailClick(image.ImageUrl)}
                style={{
                  width: "80px",
                  height: "80px",
                  margin: "5px",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>

          <div className="row mt-3">
            <div className="col-md-6 d-flex justify-content-center">
              <img
                src={selectedImage || product.ThumbnailUrl}
                alt={product.Title}
                className="img-fluid mt-3"
                style={{ width: "400px", height: "300px" }}
              />
            </div>

            <div className="col-md-6">
              <span>{product.Brand}</span>
              <br />
              <h5>{product.Description}</h5>
              <p>
                Precio: <span>${product.Price}</span>{" "}
              </p>
              <p>Stock: {product.Stock}</p>
              <button className="btn btn-primary mt-3">Comprar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
