import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link
      to="#"
      onClick={() => window.history.back()}
      className="btn btn-primary btn-sm position-absolute"
      style={{ top: "1rem", left: "1rem" }}
    >
      Volver
    </Link>
  );
};

export default BackButton;
