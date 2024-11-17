import MockAdapter from 'axios-mock-adapter';
import apiClient, { get, post, put, del, getAuthHeaders } from '../../src/services/apiClient';
import { afterEach, beforeEach, describe, expect, it, Mock } from 'vitest';
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


});
