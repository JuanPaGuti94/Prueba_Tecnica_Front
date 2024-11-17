import axios, { AxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_URL_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAuthHeaders = (
  customHeaders?: Record<string, string>,
  token?: string
) => {
  return {
    Authorization: `Bearer ${token}`,
    ...customHeaders,
  };
};

const getRequestConfig = (config: AxiosRequestConfig, controller: AbortController) => {
  return { ...config, signal: controller.signal };
};

export const get = async <T>(
  url: string,
  token?: string,
  customHeaders?: Record<string, string>,
  config: AxiosRequestConfig = {}
): Promise<T> => {
  const controller = new AbortController();
  const headers = getAuthHeaders(customHeaders, token);
  const response = await apiClient.get<T>(url, getRequestConfig({
    ...config,
    headers: {
      ...config.headers,
      ...headers,
    },
  }, controller));
  return response.data;
};

export const post = async <T, D>(
  url: string,
  data: D,
  token?: string,
  customHeaders?: Record<string, string>,
  config: AxiosRequestConfig = {}
): Promise<T> => {
  const controller = new AbortController();
  const headers = getAuthHeaders(customHeaders, token);
  const response = await apiClient.post<T>(url, data, getRequestConfig({
    ...config,
    headers: {
      ...config.headers,
      ...headers,
    },
  }, controller));
  return response.data;
};

export const put = async <T, D>(
  url: string,
  data: D,
  token?: string,
  customHeaders?: Record<string, string>,
  config: AxiosRequestConfig = {}
): Promise<T> => {
  const controller = new AbortController();
  const headers = getAuthHeaders(customHeaders, token);
  const response = await apiClient.put<T>(url, data, getRequestConfig({
    ...config,
    headers: {
      ...config.headers,
      ...headers,
    },
  }, controller));
  return response.data;
};

export const del = async <T>(
  url: string,
  token?: string,
  customHeaders?: Record<string, string>,
  config: AxiosRequestConfig = {}
): Promise<T> => {
  const controller = new AbortController();
  const headers = getAuthHeaders(customHeaders, token);
  const response = await apiClient.delete<T>(url, getRequestConfig({
    ...config,
    headers: {
      ...config.headers,
      ...headers,
    },
  }, controller));
  return response.data;
};

export default apiClient;
