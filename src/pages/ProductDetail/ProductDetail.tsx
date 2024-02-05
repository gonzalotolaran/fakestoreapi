import { Params, useLoaderData, useNavigate, ScrollRestoration } from 'react-router-dom';
import { getSingleProductHandler } from '../../modules/product/product.service';
import { Product } from '../../modules/product/product.types';
import "./ProductDetail.css";

import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/redux-toolkit/cart/cartSlice';

export async function loader({ params }: {params: Params}) {
  const {data, hasError} = await getSingleProductHandler(params.productId || "");
  if(!hasError) return data;
}

const ProductDetail = () => {

  const dispatch = useDispatch();
  const product = useLoaderData() as Product;
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1)
  }
  const handleViewCart = () => {
    navigate("/cart")
  }

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      price: product.price,
      title: product.title,
      quantity: 1,
      image: product.image
    }))
  }

  return (
    <div className='productsContainer'>
      <ScrollRestoration />
      <nav>
        <button type='button' onClick={handleClickBack}>Regresar</button>
        <button type='button' onClick={handleViewCart}>Ver el carrito</button>
      </nav>

      <section>
        <img className='product-detail-image' src={product.image} alt="imagen del producto" />
        
        <div className="product-rating">
          <div className="product-rate">
            {product.rating.rate}
          </div>
          <div className="product-reviews">
            {product.rating.count} reviews
          </div>
        </div>

        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <span>$ {product.price}</span>

        <button onClick={handleAddToCart}>Add to Cart</button>

      </section>
    </div>
  )
}

export default ProductDetail