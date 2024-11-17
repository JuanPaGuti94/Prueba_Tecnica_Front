import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from '../../../src/shared/cards/cards.component';
import { showToast } from '../../../src/shared/notification/toast.component';
import { afterEach, beforeEach, describe, expect, it, Mock, test, vi } from 'vitest';
import React from 'react';
vi.mock('../../../src/shared/notification/toast.component');

describe('Card Component', () => {
  const mockOnEdit = vi.fn();
  const mockOnDelete = vi.fn();

  const props = {
    imageUrl: 'https://example.com/image.jpg',
    title: 'Test Product',
    description: 'This is a test product.',
    price: 100,
    availableQuantity: 10,
    onEdit: mockOnEdit,
    onDelete: mockOnDelete,
  };

  afterEach(() => {
    vi.clearAllMocks(); 
  });

  it('should display product details', () => {
    render(<Card {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByText(`Precio: $${props.price.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByText(`Cantidad disponible: ${props.availableQuantity}`)).toBeInTheDocument();
  });



  it('should call onDelete when Delete button is clicked', () => {
    render(<Card {...props} />);

    fireEvent.click(screen.getByText('Borrar'));

    expect(mockOnDelete).toHaveBeenCalled();
  });


});