import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps) {
    const [details, setDetails] = useState(false);

    const btnClassName = details? 'bg-gray-400' : 'bg-blue-400';

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6 mt-3" alt={product.title} />
            <p>{ product.title }</p>
            <p className="font-bold">{product.price}</p>
            {details && <div>
                <p>{product.description}</p>
                <div className='font-bold mt-4'>Rate:{product?.rating?.rate}</div>
            </div>}
            <button onClick={() => setDetails(prev => !prev)} className={`m-3 py-2 px-4 border ${btnClassName}`}> 
                {details? 'Hide details' : 'Show details'}
            </button>
        </div>
    )
}