import { getOrders, postOrders, putOrders, deleteOrders } from '../../src/services/orders.services';
import { get, post, put, del } from '../../src/services/apiClient';
import { OrderRequets, OrderResponse } from '../../src/interfaces/order.interface';
import { vi, it, expect, describe, Mock } from 'vitest';
import { ApiResponse } from '../../src/interfaces/product.interface';

vi.mock('@/services/apiClient');

describe('order.service', () => {
  describe('getOrders', () => {
    it('should return the correct response on success', async () => {
      const mockResponse: OrderResponse = { data: { /* datos simulados */ } };
      (get as Mock).mockResolvedValue(mockResponse);

      const response = await getOrders();
      expect(response).toEqual(mockResponse);
    });

    it('should throw an error message on failure', async () => {
      (get as Mock).mockRejectedValue(new Error('Network Error'));

      await expect(getOrders()).rejects.toThrow('Error getting orders');
    });
  });

  describe('postOrders', () => {
    it('should return the correct response on success', async () => {
      const mockResponse: ApiResponse = { /* datos simulados */ };
      const mockRequest: OrderRequets = { /* datos de solicitud simulados */ };
      (post as Mock).mockResolvedValue(mockResponse);

      const response = await postOrders(mockRequest);
      expect(response).toEqual(mockResponse);
    });

    it('should throw an error message on failure', async () => {
      const mockRequest: OrderRequets = { /* datos de solicitud simulados */ };
      (post as Mock).mockRejectedValue(new Error('Network Error'));

      await expect(postOrders(mockRequest)).rejects.toThrow('Error post products');
    });
  });

  describe('putOrders', () => {
    it('should return the correct response on success', async () => {
      const mockResponse: ApiResponse = { /* datos simulados */ };
      const mockRequest: OrderRequets = { /* datos de solicitud simulados */ };
      const orderId = '123'; // ID de orden simulado
      (put as Mock).mockResolvedValue(mockResponse);

      const response = await putOrders(orderId, mockRequest);
      expect(response).toEqual(mockResponse);
    });

    it('should throw an error message on failure', async () => {
      const mockRequest: OrderRequets = { /* datos de solicitud simulados */ };
      const orderId = '123'; // ID de orden simulado
      (put as Mock).mockRejectedValue(new Error('Network Error'));

      await expect(putOrders(orderId, mockRequest)).rejects.toThrow('Error update products');
    });
  });

  describe('deleteOrders', () => {
    it('should return the correct response on success', async () => {
      const mockResponse: ApiResponse = { /* datos simulados */ };
      const orderId = '123'; // ID de orden simulado
      (del as Mock).mockResolvedValue(mockResponse);

      const response = await deleteOrders(orderId);
      expect(response).toEqual(mockResponse);
    });

    it('should throw an error message on failure', async () => {
      const orderId = '123'; // ID de orden simulado
      (del as Mock).mockRejectedValue(new Error('Network Error'));

      await expect(deleteOrders(orderId)).rejects.toThrow('Error delete products');
    });
  });
});