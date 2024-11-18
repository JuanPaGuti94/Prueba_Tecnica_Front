import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import OrdersTable from '../../../../src/pages/orders/componenets/orders-table.component';
import { Order } from '../../../../src/interfaces/order.interface'; // Asegúrate de que la ruta sea correcta
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
describe('OrdersTable', () => {
  const mockOnEdit = vi.fn();
  const mockOnDelete = vi.fn();
  
  // Definimos la estructura de Order basada en la interfaz
  const mockDataOrder: Order[] = [
    {
      id: 1,
      customer_name: 'Cliente 1',
      identification_type: 'DNI',
      identification_number: '12345678',
      order_date: '2023-10-01T12:00:00Z',
      total: 150,
      products: [
        { id: 101, quantity: 2 },
        { id: 102, quantity: 1 },
      ],
    },
    {
      id: 2,
      customer_name: 'Cliente 2',
      identification_type: 'RUC',
      identification_number: '87654321',
      order_date: '2023-10-02T12:00:00Z',
      total: 200,
      products: [
        { id: 201, quantity: 1 },
      ],
    },
  ];

  beforeEach(() => {
    render(<OrdersTable dataOrder={mockDataOrder} onEdit={mockOnEdit} onDelete={mockOnDelete} />);
  });

  it('should render the table with order data', () => {
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Cliente 1')).toBeInTheDocument();
    expect(screen.getByText('Cliente 2')).toBeInTheDocument();
    expect(screen.getByText('DNI')).toBeInTheDocument();
    expect(screen.getByText('RUC')).toBeInTheDocument();
    expect(screen.getByText('12345678')).toBeInTheDocument();
    expect(screen.getByText('87654321')).toBeInTheDocument();
    expect(screen.getByText('150')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByText('101')).toBeInTheDocument();
    expect(screen.getByText('102')).toBeInTheDocument();
    expect(screen.getByText('201')).toBeInTheDocument();
  });

  it('should call onEdit when Edit button is clicked', () => {
    const editButton = screen.getAllByText('Editar')[0];
    fireEvent.click(editButton);
    expect(mockOnEdit).toHaveBeenCalledWith(mockDataOrder[0]);
  });

  it('should call onDelete when Delete button is clicked', () => {
    const deleteButton = screen.getAllByText('Borrar')[0];
    fireEvent.click(deleteButton);
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });
});