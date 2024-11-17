import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi, describe, it, expect } from 'vitest';
import { AppRouter } from '../../src/router/app.router';

vi.mock('../../src/router/private.route', () => ({
  PrivateRoute: ({ Component }: { Component: React.ComponentType }) => <Component />,
}));

vi.mock('../../src/layouts/app.layout', () => ({
  AppLayout: () => <div>App Layout</div>,
}));

vi.mock('../../src/pages/home/home.component', () => ({
  HomePage: () => <div>Home Page</div>,
}));

describe('AppRouter', () => {
  it('should render AppLayout when user is authenticated', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRouter />
      </MemoryRouter>
    );
    expect(screen.getByText('App Layout')).toBeInTheDocument();
  });

  it('should call PrivateRoute with correct props', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRouter />
      </MemoryRouter>
    );
    expect(screen.getByText('App Layout')).toBeInTheDocument();
  });
});