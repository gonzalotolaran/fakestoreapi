import {FC} from 'react';
import { ProductItem, deleteProduct, incrementProduct, decrementProduct } from '../../../../store/redux-toolkit/cart/cartSlice'
import './CartItem.css';
import {useDispatch} from 'react-redux';

interface CartItemProps {
  item: ProductItem;
}

const CartItem : FC<CartItemProps> = ({item}) => {

  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteProduct({id: item.id}))
  }

  const handleIncrementItem = () => {
    dispatch(incrementProduct({id: item.id}))
  }
  const handleDecrementItem = () => {
    dispatch(decrementProduct({id: item.id}))
  }

  return (
    <article className='cart-item-container'>
      <div>
        <img src={item.image} alt="imagen" />
      </div>
      <div className='right'>
        <div>
          {item.title}
          <button onClick={handleDeleteItem}>X</button>
        </div>

        <div>
          $ {item.price}
          <button onClick={handleDecrementItem}>-</button>
          {item.quantity}
          <button onClick={handleIncrementItem}>+</button>
        </div>
      </div>
    </article>
  )
}

export default CartItem