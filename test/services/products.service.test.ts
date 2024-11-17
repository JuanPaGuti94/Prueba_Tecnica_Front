import { getProducts, postProducts, putProducts, deleteProducts } from '../../src/services/products.service';
import { get, post, put, del } from '../../src/services/apiClient';
import { ApiResponse, ProductRequets, ProductResponse } from '../../src/interfaces/product.interface';
import { vi, it, expect, describe, Mock } from 'vitest';

vi.mock('@/services/apiClient');

describe('product.service', () => {
  describe('getProducts', () => {
    it('should return the correct response on success', async () => {
      const mockResponse: ProductResponse = { data: { /* datos simulados */ } };
      (get as Mock).mockResolvedValue(mockResponse);

      const response = await getProducts();
      expect(response).toEqual(mockResponse);
    });

    it('should throw an error message on failure', async () => {
      (get as Mock).mockRejectedValue(new Error('Network Error'));

      await expect(getProducts()).rejects.toThrow('Error getting products');
    });
  });

  describe('postProducts', () => {
    it('should return the correct response on success', async () => {
      const mockResponse: ApiResponse = { /* datos simulados */ };
      const mockRequest: ProductRequets = { /* datos de solicitud simulados */ };
      (post as Mock).mockResolvedValue(mockResponse);

      const response = await postProducts(mockRequest);
      expect(response).toEqual(mockResponse);
    });

    it('should throw an error message on failure', async () => {
      const mockRequest: ProductRequets = { /* datos de solicitud simulados */ };
      (post as Mock).mockRejectedValue(new Error('Network Error'));

      await expect(postProducts(mockRequest)).rejects.toThrow('Error post products');
    });
  });

  describe('putProducts', () => {
    it('should return the correct response on success', async () => {
      const mockResponse: ApiResponse = { /* datos simulados */ };
      const mockRequest: ProductRequets = { /* datos de solicitud simulados */ };
      const productId = '123'; // ID de producto simulado
      (put as Mock).mockResolvedValue(mockResponse);

      const response = await putProducts(productId, mockRequest);
      expect(response).toEqual(mockResponse);
    });

    it('should throw an error message on failure', async () => {
      const mockRequest: ProductRequets = { /* datos de solicitud simulados */ };
      const productId = '123'; // ID de producto simulado
      (put as Mock).mockRejectedValue(new Error('Network Error'));

      await expect(putProducts(productId, mockRequest)).rejects.toThrow('Error update products');
    });
  });

  describe('deleteProducts', () => {
    it('should return the correct response on success', async () => {
      const mockResponse: ApiResponse = { /* datos simulados */ };
      const productId = '123'; // ID de producto simulado
      (del as Mock).mockResolvedValue(mockResponse);

      const response = await deleteProducts(productId);
      expect(response).toEqual(mockResponse);
    });

    it('should throw an error message on failure', async () => {
      const productId = '123'; // ID de producto simulado
      (del as Mock).mockRejectedValue(new Error('Network Error'));

      await expect(deleteProducts(productId)).rejects.toThrow('Error delete products');
    });
  });
});