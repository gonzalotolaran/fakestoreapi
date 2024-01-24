import { useEffect, useState } from "react";
import ProductCategories from "./components/ProductCategories";
import ProductItem from "./components/ProductItem";
import ProductListStyles from './ProductList.module.css';
import {useLoaderData} from 'react-router-dom';
import { useProducts } from "./hooks/products.hooks";

export async function loader({ request }: {request: Request}) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  return category;
}

const ProductList = () => {
  const category = useLoaderData() as string | null ;
  const [categorySelected, setCategorySelected] = useState(category || "All");
  const {products} = useProducts(categorySelected);

  useEffect(()=> {
    setCategorySelected(category || "All")
  },[category])

  return (
    <>
      <ProductCategories categorySelected={categorySelected} setCategoryCallback={setCategorySelected} />
      <div className={ProductListStyles.productsContainer}>
        {products.map(item => <ProductItem key={item.id} item={item}/>)}
      </div>
    </>
  )
}

export default ProductList;