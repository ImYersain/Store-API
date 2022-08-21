import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IProduct } from "../models";

export const useProducts = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const addProduct = (product: IProduct) => {
    setProducts(prev => [...prev, product])
  }

  async function fetchProducts(){
    try {
      setError('')
      setIsLoading(true);
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
      setProducts(response.data);
      setIsLoading(false);
      
    } catch (e: unknown) {

      setIsLoading(false);
      const error = e as AxiosError;
      setError(error.message);
    }
  }


  useEffect(() => {
    fetchProducts();
  }, []);

  return {isLoading, error, products, addProduct}
}