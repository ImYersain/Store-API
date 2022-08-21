import axios from 'axios';
import React, { useState } from 'react'
import { IProduct } from '../models';
import ErrorMessage from './ErrorMessage';


interface CreateProductProps {
  createModal: (product: IProduct) => void
}

const productData:IProduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10
  }
}


export default function CreateProduct({createModal}: CreateProductProps) {
    const [value, setValue] = useState('');
    const [validError, setValidError] = useState('');

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if(value.trim().length === 0){
          setValidError('Please enter valid title');
          return
        }

        productData.title = value;
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
        createModal(response.data);
    }


    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }


  return (
    <form onSubmit={submitHandler}>
        <input value={value} onChange={changeHandler} type="text" className='border py-2 px-4 mb-2 w-full' placeholder='Enter product title ...' />
        {validError && <ErrorMessage error={validError} />}
        <button type='submit' className='py-2 px-4 border bg-yellow-400 hover:text-white'>Create</button>
    </form>
  )
}
