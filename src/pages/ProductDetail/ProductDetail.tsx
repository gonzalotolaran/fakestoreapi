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

  return (
    <div className='productsContainer'>
      <nav>
        <button type='button' onClick={handleClickBack}>Regresar</button>
      </nav>

      <section>

        <div>
          Este es el detalle del producto
        </div>
        <img className='product-detail-image' src={product.image} alt="imagen del prodcuto" />

      </section>
    </div>
  )
}

export default ProductDetail