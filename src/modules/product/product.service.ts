import { IApiResponse } from '../app/app.types';
import { productEndpoints } from './product.endpoints';
import { Product, ProductCategory } from './product.types';

export const getAllProductsHandler = async () => {
	try {
		const res = await fetch(productEndpoints.getAllProducts);
		if(!res.ok) throw new Error(`${res.status}`);
		const data = await res.json();
		const response: IApiResponse<Product[]> = {
			data,
			hasError: false,
		};
		return response;
	} catch (error) {
		const errorResponse: IApiResponse<Product[]> = {
			hasError: true,
			error: error
		}
		return errorResponse;
	}
}

export const getAllCategoriesHandler = async () => {
	try {
		const res = await fetch(productEndpoints.getAllCategories);
		if(!res.ok) throw new Error(`${res.status}`);
		const data = await res.json();
		const response: IApiResponse<ProductCategory[]> = {
			data,
			hasError: false,
		};
		return response;
	} catch (error) {
		const errorResponse: IApiResponse<ProductCategory[]> = {
			hasError: true,
			error: error
		}
		return errorResponse;
	}
}

export const getProductsInCategoryHandler = async (category: string) => {
	try {
		const res = await fetch(productEndpoints.getProductsInCategory + category);
		if(!res.ok) throw new Error(`${res.status}`);
		const data = await res.json();
		const response: IApiResponse<Product[]> = {
			data,
			hasError: false,
		};
		return response;
	} catch (error) {
		const errorResponse: IApiResponse<Product[]> = {
			hasError: true,
			error: error
		}
		return errorResponse;
	}
}

export const getSingleProductHandler = async (productId: string) => {
	try {
		const res = await fetch(productEndpoints.getSingleProduct + productId);
		if(!res.ok) throw new Error(`${res.status}`);
		const data = await res.json();
		const response: IApiResponse<Product> = {
			data,
			hasError: false,
		};
		return response;
	} catch (error) {
		const errorResponse: IApiResponse<Product> = {
			hasError: true,
			error: error
		}
		return errorResponse;
	}
}
