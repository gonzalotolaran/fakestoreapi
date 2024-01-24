import {useCategories} from '../../hooks/products.hooks';
import {FC} from 'react';
import './ProductCategories.css';
import { IProductCategoriesProps, IProductCategoryItemProps } from './productCategories.types';
import {useNavigate} from 'react-router-dom';

const ProductCategoryItem: FC<IProductCategoryItemProps> = ({description, setCategoryCallback, isSelected}) => {

  const navigate = useNavigate();
  const handleClickCategory = () => {
    setCategoryCallback(description);
    navigate(`/?category=${description}`)
  }

  return (
    <button type='button'
      className={`button-category ${isSelected && 'button-category--state-selected'}`}
      onClick={handleClickCategory}
    >{description}</button>
  )
}


const ProductCategories: FC<IProductCategoriesProps> = ({categorySelected, setCategoryCallback}) => {
  const {categories} = useCategories();
  return (
    <div className='product-categories-container'>
      {categories.map( item => <ProductCategoryItem
        setCategoryCallback={setCategoryCallback}
        key={item}
        description={item} 
        isSelected={item === categorySelected}
      />)}
    </div>
  )
}

export default ProductCategories