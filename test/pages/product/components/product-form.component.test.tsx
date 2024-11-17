import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ProductForm } from './../../../../src/pages/product/components/product-form.component'; // Asegúrate de que la ruta sea correcta
import { afterEach, beforeEach, describe, expect, it, Mock, test, vi } from 'vitest';
import useStage from './../../../../src/hooks/stage-store.hook';
// Mock de la función showToast
vi.mock('./../../../../src/shared/notification/toast.component', () => ({
  showToast: vi.fn(),
}));
vi.mock('./../../../../src/hooks/stage-store.hook', () => ({
  __esModule: true,
  default: vi.fn(),
}));
describe('ProductForm', () => {
  const mockOnCreate = vi.fn();
  const setCreateProductMock = vi.fn();
  beforeEach(() => {
    vi.clearAllMocks(); // Limpiar mocks antes de cada prueba
    (useStage as Mock).mockReturnValue({ setCreateProduct: setCreateProductMock,
      productName : "",
     setProductName:vi.fn(),
     image:"",
     setImage:vi.fn(),
     productDescription:"",
     setProductDescription:vi.fn(),
     productPrice:"",
     setProductPrice:vi.fn(),
     productStock:"",
     setProductStock:vi.fn()});
  });

  it('should render the form correctly', () => {
    render(<ProductForm onCreate={mockOnCreate} />);

    expect(screen.getByText('Crear Nuevo Producto')).toBeInTheDocument();

  });

  it('should create a new product with valid data', () => {
    (useStage as Mock).mockReturnValue({ setCreateProduct: setCreateProductMock,
      productName : "Medias",
     setProductName:vi.fn(),
     image:'https://example.com/amazfit-gtr4.jpg',
     setImage:vi.fn(),
     productDescription:"Medias de niño",
     setProductDescription:vi.fn(),
     productPrice:5000,
     setProductPrice:vi.fn(),
     productStock:2,
     setProductStock:vi.fn()});

    render(<ProductForm onCreate={mockOnCreate} />);

    // Simular el envío del formulario
    fireEvent.click(screen.getByTestId('confirmar'));

    // Verificar que la función onCreate fue llamada con el producto correcto
    expect(mockOnCreate).toHaveBeenCalledWith({
      name: 'Medias',
      description: 'Medias de niño',
      price: 5000,
      stock: 2,
      img: 'https://example.com/amazfit-gtr4.jpg',
    });
  });

});