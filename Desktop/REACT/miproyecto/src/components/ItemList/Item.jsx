import React from 'react'
import { Link } from 'react-router-dom'

function Item({ id, nombre, precio, categoria, imagen }) {
  return (
    <div class="row">
    <div className="col-md-4">
      <div class="shadow p-3 mb-5 bg-body rounded card mx-2">
        <img src={imagen} alt={nombre} class="card-img-top" />
        <div class="card-body">
          <h2 class="card-title">{nombre}</h2>
          <h3 class="text-muted">{categoria}</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <p className="fs-4 badge bg-danger text-wrap">
              ${precio}
            </p>

          </li>
        </ul>
        <Link className="btn btn-primary" to={`/item/${id}`}>
          ver detalle del producto
        </Link>
      </div>
    </div>
    </div>

  )
}


export default Item