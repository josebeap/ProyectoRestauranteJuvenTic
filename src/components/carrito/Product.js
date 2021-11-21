import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="col-11 col-md-6 col-lg-4 mx-0 mb-4" >
      <div class="card p-3 overflow-hidden h-100 shadow">
        <img
          class="card-img-to"
          img-fluid
          src={product.image}
          alt={product.name}
        />
        <div class="card-body">
          <h3>{product.name}</h3>
          <div>${product.price}</div>
          <p class="card-text">{product.descripcion}</p>

          <button class="btn btn-primary" onClick={() => onAdd(product)}>
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}
