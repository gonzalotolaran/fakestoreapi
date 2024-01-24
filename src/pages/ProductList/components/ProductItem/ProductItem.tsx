import {FC} from 'react';
import {Product} from '../../../../modules/product/product.types';
import './ProductItem.css';
import {useNavigate} from 'react-router-dom';

interface IProductItemProps {
  item: Product;
}
const ProductItem: FC<IProductItemProps> = ({item}) => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${item.id}`)
  }

  return (
    <article onClick={handleClick}>
      <img className='product-item-image' src={item.image} alt="imagen del producto" />
      <span className='product-item-title'>{item.title}</span>
      <p className='product-item-price'>{item.price}</p>
    </article>
  )
}

export default ProductItem