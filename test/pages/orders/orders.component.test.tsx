import { OrdersPage } from '../../../src/pages/orders/orders.component'; 
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { ProductosPage } from '../../../src/pages/product/products.component';
import useStage from '../../../src/hooks/stage-store.hook';

import {
  fetchProducts,
  fetchCreateProducts,
  fetchDeleteProducts,
  fetchUpdateProducts,
} from '../../../src/utils/products/product.utils';
// Mock de los hooks y componentes

vi.mock('../../../src/hooks/stage-store.hook', () => ({
  __esModule: true,
  default: vi.fn(),
}));

vi.mock('../../../src/utils/products/product.utils', () => ({
  fetchProducts: vi.fn(),
  fetchCreateProducts: vi.fn(),
  fetchDeleteProducts: vi.fn(),
  fetchUpdateProducts: vi.fn(),
}));

describe('ProductosPage', () => {
  
  const setCreateOrderMock = vi.fn();
  const mockProducts = [
    { id: 1, name: 'Producto 1', price: 100, description: 'Descripción 1', img: 'url1', stock: 10 },
    { id: 2, name: 'Producto 2', price: 200, description: 'Descripción 2', img: 'url2', stock: 5 },
  ];

  beforeEach(() => {
     (useStage as Mock).mockReturnValue({ 
      createOrder: false, 
      setCreateOrder: setCreateOrderMock,
 });
    (fetchProducts as Mock).mockImplementation(async (setData) => {
      setData(mockProducts);
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('OrdersPage', () => {
    it('should render the OrdersPage component correctly', () => {
      render(<OrdersPage />);
    });
  });

});