import { del, get, post, put } from './apiClient';
import { ApiResponse } from '../interfaces/product.interface';
import { OrderRequets, OrderResponse } from '../interfaces/order.interface';

export const getOrders = async () => {
  try {
    const response = await get<OrderResponse>(
      `orders`,
    );
    return response;
  } catch (e) {
    console.error('Error getting orders', e);
    throw new Error('Error getting orders');
  }
};

export const postOrders = async (
    updateProduct:OrderRequets) => {
    try {
      const response = await post<ApiResponse,OrderRequets>(
        `orders`,
        updateProduct
      );
      return response;
    } catch (e) {
      console.error('Error post products', e);
      throw new Error('Error post products');
    }
  };
  export const putOrders = async (
    id:string,
    updateProduct:OrderRequets) => {
    try {
      const response = await put<ApiResponse,OrderRequets>(
        `orders/${id}`,
        updateProduct
      );
      return response;
    } catch (e) {
      console.error('Error update products', e);
      throw new Error('Error update products');
    }
  };
  export const deleteOrders = async (id:string) => {
    try {
      const response = await del<ApiResponse>(
        `orders/${id}`,
      );
      return response;
    } catch (e) {
      console.error('Error delete products', e);
      throw new Error('Error delete products');
    }
  };
