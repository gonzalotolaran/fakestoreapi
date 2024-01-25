import { Params, useLoaderData, useNavigate } from 'react-router-dom';
import { getSingleProductHandler } from '../../modules/product/product.service';
import { Product } from '../../modules/product/product.types';
import "./ProductDetail.css";

export async function loader({ params }: {params: Params}) {
  const {data, hasError} = await getSingleProductHandler(params.productId || "");
  if(!hasError) return data;
}

const ProductDetail = () => {

  const product = useLoaderData() as Product;
  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate(-1)
  }

  const handleAddToCart = () => {
    
  }

  return (
    <div className='productsContainer'>
      <nav>
        <button type='button' onClick={handleClickBack}>Regresar</button>
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