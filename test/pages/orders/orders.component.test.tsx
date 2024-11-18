import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { OrdersPage } from './../../../src/pages/orders/orders.component';
import useStage from './../../../src/hooks/stage-store.hook';
import {
  fetchCreateOrder,
  fetchDeleteOrders,
  fetchOrder,
  fetchUpdateOrder,
} from './../../../src/utils/orders/order.utils';

vi.mock('./../../../src/hooks/stage-store.hook', () => ({
  __esModule: true,
  default: vi.fn(),
}));

vi.mock('./../../../src/utils/orders/order.utils', () => ({
  fetchCreateOrder: vi.fn(),
  fetchDeleteOrders: vi.fn(),
  fetchOrder: vi.fn(),
  fetchUpdateOrder: vi.fn(),
}));

describe('OrdersPage', () => {
  const setCreateOrderMock = vi.fn();
  const mockOrders = [
    {
      id: 1,
      customer_name: 'Cliente 1',
      identification_type: 'DNI',
      identification_number: '12345678',
      order_date: '2023-01-01',
      products: [],
      total: 100,
    },
    {
      id: 2,
      customer_name: 'Cliente 2',
      identification_type: 'DNI',
      identification_number: '87654321',
      order_date: '2023-01-02',
      products: [],
      total: 200,
    },
  ];

  beforeEach(() => {
    (useStage as Mock).mockReturnValue({
      createOrder: false,
      setCreateOrder: setCreateOrderMock,
    });
    (fetchOrder as Mock).mockImplementation(async (setData) => {
      setData(mockOrders);
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render loading state initially', () => {
    render(<OrdersPage />);
    
    expect(screen.getByText('¡Gestión de Pedidos!')).toBeInTheDocument();
  });

  it('should render orders after loading', async () => {
    render(<OrdersPage />);
    
    await waitFor(() => {
      expect(screen.getByText('Cliente 1')).toBeInTheDocument();
      expect(screen.getByText('Cliente 2')).toBeInTheDocument();
    });
  });

  it('should open order creation form when "CREAR" button is clicked', async () => {
    render(<OrdersPage />);
    
    await waitFor(() => {
      fireEvent.click(screen.getByTestId('crear'));
      expect(setCreateOrderMock).toHaveBeenCalledWith(true);
    });
  });

  it('should create a new order', async () => {
    (fetchCreateOrder as Mock).mockImplementation(async () => {
      await fetchOrder(setCreateOrderMock);
    });
    
    render(<OrdersPage />);
    
    await waitFor(() => {
      fireEvent.submit(screen.getByRole('button', { name: /crear/i }));

 });
  });

  it('should delete an order', async () => {
    (fetchDeleteOrders as Mock).mockImplementation(async () => {
      await fetchOrder(setCreateOrderMock);
    });

    render(<OrdersPage />);
    
    await waitFor(() => {
      const deleteButton = screen.getAllByText('Borrar')[0]; 
      fireEvent.click(deleteButton);
      expect(fetchDeleteOrders).toHaveBeenCalledWith('1'); 
    });
  });

  it('should edit an order', async () => {
    (fetchUpdateOrder as Mock).mockImplementation(async () => {
      await fetchOrder(setCreateOrderMock);
    });

    render(<OrdersPage />);
    
    await waitFor(async () => {
      const editButton = await screen.findAllByText(/editar/i); 
      fireEvent.click(editButton[0]);
      expect(setCreateOrderMock).toHaveBeenCalledWith(true);
    });
  });
});