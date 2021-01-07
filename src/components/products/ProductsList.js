import React from 'react'

export const ProductsList = ({id, vendorId, vendorName, name, sku, price, units}) => {
    return (
        <div className="card" style={{maxWidth:300}}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                {(vendorName) && <h6 className="card-subtitle mb-2 text-muted">{vendorName}</h6>}
                <p className="card-text">SKU: {sku}</p>
                <p className="card-text">Precio: {price}</p>
                {(units) && <p className="card-text">Stock: {units}</p>}
                <span className="card-link" style={{color:"blue",cursor:"pointer"}}>Agregar a carrito</span>
            </div>
        </div>
    )
}
