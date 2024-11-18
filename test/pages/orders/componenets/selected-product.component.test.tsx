import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { ProductSelectionForm } from '../../../../src/pages/orders/componenets/selected-product.component';
import { Product } from '../../../../src/interfaces/product.interface';
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
describe('ProductSelectionForm', () => {
  const mockOnAddProduct = vi.fn();
  const mockProducts: Product[] = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
  ];

  beforeEach(() => {
    render(<ProductSelectionForm dataProduct={mockProducts} onAddProduct={mockOnAddProduct} />);
  });

  it('should render the component correctly', () => {
    expect(screen.getByText('Selecciona un producto')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Cantidad')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /agregar/i })).toBeInTheDocument();
  });

  it('should display products in the select dropdown', () => {
    const productOptions = screen.getAllByRole('option');
    expect(productOptions).toHaveLength(mockProducts.length + 1); // +1 for the disabled option
    expect(productOptions[1]).toHaveTextContent('Producto 1 - $100');
    expect(productOptions[2]).toHaveTextContent('Producto 2 - $200');
  });

  it('should call onAddProduct with correct parameters when adding a product', () => {
    // Select a product
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '1' } });
    fireEvent.change(screen.getByPlaceholderText('Cantidad'), { target: { value: '2' } });

    // Click the add button
    fireEvent.click(screen.getByRole('button', { name: /agregar/i }));

    // Check if onAddProduct was called with correct parameters
    expect(mockOnAddProduct).toHaveBeenCalledWith(1, 2);
  });

  it('should reset the selection after adding a product', () => {
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '1' } });
    fireEvent.change(screen.getByPlaceholderText('Cantidad'), { target: { value: '2' } });
    fireEvent.click(screen.getByRole('button', { name: /agregar/i }));

    // Check that the select and input are reset
    expect(screen.getByRole('combobox')).toHaveValue('');
  });
});