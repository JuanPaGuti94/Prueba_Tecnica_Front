import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { OrderForm } from '../../../../src/pages/orders/componenets/form-table.component';
import { fetchProducts } from '../../../../src/utils/products/product.utils';

vi.mock('./../../../../src/utils/products/product.utils', () => ({
  fetchProducts: vi.fn(),
}));

describe('OrderForm', () => {
  const mockOnAddOrder = vi.fn();
  const mockOnEditOrder = vi.fn();
  const mockSetCreateOrder = vi.fn();
  const mockDataEdit = {
    id: 1,
    customer_name: 'Cliente 1',
    identification_type: 'CC',
    identification_number: '12345678',
    order_date: '2023-01-01',
    products: [],
    total: 100,
  };

  beforeEach(() => {
    (fetchProducts as Mock).mockImplementation(async (setData) => {
      setData([
        { id: 1, name: 'Producto 1', price: 100 },
        { id: 2, name: 'Producto 2', price: 200 },
      ]);
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render the form correctly', async () => {
    render(<OrderForm 
      onAddOrder={mockOnAddOrder}
      onEditOrder={mockOnEditOrder}
      type="add"
      dataEdit={mockDataEdit}
      setCreateOrder={mockSetCreateOrder}
    />);
    
    expect(screen.getByText('Crear Nuevo Pedido')).toBeInTheDocument();
  });


});