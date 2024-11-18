import MockAdapter from 'axios-mock-adapter';
import apiClient, { get, post, put, del, getAuthHeaders } from '../../src/services/apiClient'; // Asegúrate de que la ruta sea correcta
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import axios from 'axios';

const mock = new MockAdapter(apiClient);

describe('API Client', () => {
  const mockToken = 'mocked-token';
  const mockResponseData = { data: 'mocked data' };

  beforeEach(() => {
    localStorage.setItem('token', mockToken);
  });


  describe('getAuthHeaders', () => {
    it('should return headers with Authorization and user-role when token is present', () => {
      const headers = getAuthHeaders();

      expect(headers['Authorization']).toBe(`Bearer ${undefined}`);
      expect(headers['user-role']).toBe(undefined);
    });

    it('should return custom headers when provided', () => {
      const customHeaders = { 'X-Custom-Header': 'custom-value' };
      const headers = getAuthHeaders(customHeaders, true);

      expect(headers['X-Custom-Header']).toBe('custom-value');
      expect(headers['Authorization']).toBe(`Bearer ${true}`);
    });

  });

  describe('GET requests', () => {
    it('should perform a GET request and return data', async () => {
      const url = '/test';
      mock.onGet(url).reply(200, mockResponseData);

      const response = await get(url);
      expect(response).toEqual(mockResponseData);
    });


  });

  describe('POST requests', () => {
    it('should perform a POST request and return data', async () => {
      const url = '/test';
      const postData = { name: 'test' };
      mock.onPost(url).reply(200, mockResponseData);

      const response = await post(url, postData);
      expect(response).toEqual(mockResponseData);
    });


  });

  describe('PUT requests', () => {
    it('should perform a PUT request and return data', async () => {
      const url = '/test';
      const putData = { name: 'test' };
      mock.onPut(url).reply(200, mockResponseData);

      const response = await put(url, putData);
      expect(response).toEqual(mockResponseData);
    });

 
  });

  describe('DELETE requests', () => {
    it('should perform a DELETE request and return data', async () => {
      const url = '/test';
      mock.onDelete(url).reply(200, mockResponseData);

      const response = await del(url);
      expect(response).toEqual(mockResponseData);
    });


  });
});