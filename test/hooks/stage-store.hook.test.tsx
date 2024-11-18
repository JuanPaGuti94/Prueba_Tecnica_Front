import { renderHook } from '@testing-library/react-hooks';
import { StageProvider } from '../../src/context/stage'; 
import useStage from '../../src/hooks/stage-store.hook'; 
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import React from 'react';
describe('useStage', () => {
  it('should throw an error if used outside of StageProvider', () => {
    const { result } = renderHook(() => useStage());
    
    expect(result.error).toEqual(new Error("useStage must be used within a StageProvider"));
  });

  it('should return context value when used within StageProvider', () => {
    const mockValue = {
      currentStage: 'testStage',
      createOrder: false,
      createProduct: false,
      image: '',
      productDescription: '',
      productName: '',
      productPrice: '',
      productStock: '',
      setCreateOrder: vi.fn(), 
      setCreateProduct: vi.fn(),
      setImage: vi.fn(),
      setProductDescription: vi.fn(),
      setProductName: vi.fn(),
      setProductPrice: vi.fn(),
      setProductStock: vi.fn(),
      setStep: vi.fn(),
      step: 'home', 
    };

    const { result } = renderHook(() => useStage(), {
      wrapper: ({ children }) => <StageProvider value={mockValue}>{children}</StageProvider>,
    });
  });
});