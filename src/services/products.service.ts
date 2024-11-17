import { del, get, post, put } from './apiClient';
import { ApiResponse, ProductRequets, ProductResponse } from '../interfaces/product.interface';

export const getProducts = async () => {
  try {
    const response = await get<ProductResponse>(
      `products`,
    );
    return response;
  } catch (e) {
    console.error('Error getting products', e);
    throw new Error('Error getting products');
  }
};

export const postProducts = async (
    updateProduct:ProductRequets) => {
    try {
      const response = await post<ApiResponse,ProductRequets>(
        `products`,
        updateProduct
      );
      return response;
    } catch (e) {
      console.error('Error post products', e);
      throw new Error('Error post products');
    }
  };
  export const putProducts = async (
    id:string,
    updateProduct:ProductRequets) => {
    try {
      const response = await put<ApiResponse,ProductRequets>(
        `products/${id}`,
        updateProduct
      );
      return response;
    } catch (e) {
      console.error('Error update products', e);
      throw new Error('Error update products');
    }
  };
  export const deleteProducts = async (id:string) => {
    try {
      const response = await del<ApiResponse>(
        `products/${id}`,
      );
      return response;
    } catch (e) {
      console.error('Error delete products', e);
      throw new Error('Error delete products');
    }
  };
