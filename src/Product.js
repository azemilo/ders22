import React from 'react'

export const Product = (emil) => {
    console.log(emil);
    return (
        <div>
            <p>{emil.productname}</p>
            <p>{emil.id}</p>
            <p>{emil.countity}</p>
            <p>{emil.price}</p>
            <p>{emil.isStock}</p>
        </div>
    )
}
