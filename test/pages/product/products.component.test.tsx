import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { ProductosPage } from './../../../src/pages/product/products.component';
import useStage from './../../../src/hooks/stage-store.hook';
import {
  fetchProducts,
  fetchCreateProducts,
  fetchDeleteProducts,
  fetchUpdateProducts,
} from './../../../src/utils/products/product.utils';

vi.mock('./../../../src/hooks/stage-store.hook', () => ({
  __esModule: true,
  default: vi.fn(),
}));

vi.mock('./../../../src/utils/products/product.utils', () => ({
  fetchProducts: vi.fn(),
  fetchCreateProducts: vi.fn(),
  fetchDeleteProducts: vi.fn(),
  fetchUpdateProducts: vi.fn(),
}));

describe('ProductosPage', () => {
  const setCreateProductMock = vi.fn();
  const mockProducts = [
    { id: 1, name: 'Producto 1', price: 100, description: 'Descripción 1', img: 'url1', stock: 10 },
    { id: 2, name: 'Producto 2', price: 200, description: 'Descripción 2', img: 'url2', stock: 5 },
  ];

  beforeEach(() => {
    (useStage as Mock).mockReturnValue({ 
      createProduct: false, 
      setCreateProduct: setCreateProductMock,
      productName : "",
     setProductName:vi.fn(),
     image:"",
     setImage:vi.fn(),
     productDescription:"",
     setProductDescription:vi.fn(),
     productPrice:"",
     setProductPrice:vi.fn(),
     productStock:"",
     setProductStock:vi.fn() });
    (fetchProducts as Mock).mockImplementation(async (setData) => {
      setData(mockProducts);
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render loading state initially', () => {
    render(<ProductosPage />);
    
    expect(screen.getByText('Cargando productos...')).toBeInTheDocument();
  });

  it('should render products after loading', async () => {
    render(<ProductosPage />);
    
    await waitFor(() => {
      expect(screen.getByText('Catalogo')).toBeInTheDocument();
      expect(screen.getByText('Producto 1')).toBeInTheDocument();
      expect(screen.getByText('Producto 2')).toBeInTheDocument();
    });
  });

  it('should open product creation form when "CREAR" button is clicked', async () => {
    render(<ProductosPage />);
    
    await waitFor(() => {
      fireEvent.click(screen.getByText('CREAR'));
      expect(setCreateProductMock).toHaveBeenCalledWith(true);
    });
  });

  it('should create a new product', async () => {
    (fetchCreateProducts as Mock).mockImplementation(async () => {
      await fetchProducts(setCreateProductMock);
    });
    (useStage as Mock).mockReturnValue({ createProduct: true, 
      setCreateProduct: setCreateProductMock,      productName : "",
      setProductName:vi.fn(),
      image:"",
      setImage:vi.fn(),
      productDescription:"",
      setProductDescription:vi.fn(),
      productPrice:"",
      setProductPrice:vi.fn(),
      productStock:"",
      setProductStock:vi.fn() });
   

    render(<ProductosPage />);
    
    await waitFor(() => {
      fireEvent.click(screen.getByTestId('crear'));
      const createdProduct = { name: 'Nuevo Producto', price: 300, description: 'Descripción nueva', img: 'url3', stock: 20 };
      fireEvent.submit(screen.getByText('Crear Producto')); 
    });
  });
  it('should delete a product', async () => {
    (fetchDeleteProducts as Mock).mockImplementation(async () => {
      await fetchProducts(setCreateProductMock);
    });

    render(<ProductosPage />);
    
    await waitFor(() => {
      const deleteButton = screen.getAllByText('Borrar')[0]; 
      fireEvent.click(deleteButton);
      expect(fetchDeleteProducts).toHaveBeenCalledWith('1'); 
    });
  });
  it('should editar a product', async () => {
    (fetchUpdateProducts as Mock).mockImplementation(async () => {
      await fetchProducts(setCreateProductMock);
    });

    render(<ProductosPage />);
    
    await waitFor(async () => {
      const editButton = await screen.findAllByText(/editar/i); 
      fireEvent.click(editButton[0]);
  });
  });


});