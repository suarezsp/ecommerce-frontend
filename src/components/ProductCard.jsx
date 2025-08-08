import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ProductCard = ({ product, addProduct }) => {
  const outOfStock = product.rating && product.rating.rate < 2.5;

  return (
    <div
      id={product.id}
      key={product.id}
      className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
    >
      <div
        className="card h-100 border-0 rounded-4 overflow-hidden"
        style={{
          transition: "all 0.3s ease",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.03)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
        }}
      >
        <div
          className="position-relative bg-light d-flex align-items-center justify-content-center"
          style={{ height: "300px" }}
        >
          <img
            src={product.image}
            alt={product.title}
            className="p-3"
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
          <span
            className={`position-absolute top-0 start-0 badge m-2 ${
              outOfStock ? "bg-danger" : "bg-success"
            }`}
            style={{ fontWeight: "600" }}
          >
            {outOfStock ? "Out of Stock" : "New"}
          </span>
        </div>
        <div className="card-body px-4">
          <h5
            className="card-title fw-bold text-truncate"
            title={product.title}
          >
            {product.title}
          </h5>
          {product.rating && (
            <p className="text-muted small mb-1">
              {product.rating.rate} <span style={{ color: "#facc15" }}>★</span>
            </p>
          )}
          <p
            className="card-text text-muted"
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {product.description}
          </p>
        </div>
        <div className="px-4 pb-3 d-flex justify-content-between align-items-center">
          <span className="text-primary fw-bold fs-5">${product.price}</span>
          <div>
            <Link
              to={`/product/${product.id}`}
              className={`btn btn-sm btn-primary me-2 ${
                outOfStock ? "disabled" : ""
              }`}
              tabIndex={outOfStock ? -1 : 0}
              aria-disabled={outOfStock}
            >
              Buy
            </Link>

            {!outOfStock && (
              <button
                className="btn btn-sm btn-outline-dark"
                onClick={() => {
                  toast.success("Added to cart");
                  addProduct(product);
                }}
              >
                + Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;