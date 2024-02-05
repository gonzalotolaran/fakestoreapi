
import './Cart.css';
import { Params, useLoaderData, useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {useItems} from './hooks/cart.hooks';
import CartItem from './components/CartItem';

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {sortedItems} = useItems();
    
    const handleClickBack = () => {
        navigate(-1)
    }

      

  return (
    <div className='cartContainer'>
        <nav>
            <button type='button' onClick={handleClickBack}>Regresar</button>
            <div>Mi carrito</div>
            <div style={{width: "50px", height: "50px"}}></div>
        </nav>

        <section>
            {sortedItems.map( item => <CartItem key={item.id} item={item}/>)}
        </section>
  </div>
  )
}

export default Cart