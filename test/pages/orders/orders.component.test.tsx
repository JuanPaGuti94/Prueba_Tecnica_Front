import React from 'react';
import { render, screen } from '@testing-library/react';
import { OrdersPage } from '../../../src/pages/orders/orders.component'; 
import { describe, expect, it } from 'vitest';

describe('OrdersPage', () => {
  it('should render the OrdersPage component correctly', () => {
    render(<OrdersPage />);
    expect(screen.getByText('bbb')).toBeInTheDocument();
  });
});
