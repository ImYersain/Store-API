import React,{ useContext }  from 'react';
import CreateProduct from '../components/CreateProduct';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import { Product } from '../components/Product';
import { ModalContext } from '../context/ModalContext';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';

export function ProductsPage() {
    const {isLoading, error, products, addProduct} = useProducts();
    // const [isOpenModal, setIsOpenModal] = useState(true);
    const {modal, open, close: closeModal} = useContext(ModalContext);
    const createHandler = (product: IProduct) => {
      closeModal();
      addProduct(product);
    }
  
    return (
      <div className="container mx-auto max-w-2xl pt-5">
        {isLoading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {products.map(product => <Product key={product.id} product={product} />)}
        {modal && 
          <Modal onClose={closeModal} title={'Create new product'}>
            <CreateProduct createModal={createHandler}/>
          </Modal>
        }
  
        <button onClick={open} className='fixed bottom-5 right-5 rounded-full bg-orange-500 text-white text-2xl px-4 py-2 hover:opacity-80'>+</button>
      </div>
    );  
}
