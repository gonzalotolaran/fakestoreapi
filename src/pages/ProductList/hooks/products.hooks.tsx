import { useState, useEffect } from 'react';
import { getAllProductsHandler, getAllCategoriesHandler, getProductsInCategoryHandler } from '../../../modules/product/product.service';
import { Product, ProductCategory } from '../../../modules/product/product.types';

const useProducts = (category: string = "All") => {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        (async () => {
            const { data, hasError } = category === "All" ? await getAllProductsHandler() : await getProductsInCategoryHandler(category);
            if (!hasError) setProducts(data!);
        })();
    }, [category])

    return { products }
}

const useCategories = () => {

    const [categories, setCategories] = useState<ProductCategory[]>([])

    useEffect(() => {
        (async () => {
            const { data, hasError } = await getAllCategoriesHandler();
            if (!hasError) {
                // Adding All Category by default
                const allCategory = ["All", ...data!]
                setCategories(allCategory!);
            }
        })();
    }, [])

    return { categories }
}

export {
    useProducts,
    useCategories
}
