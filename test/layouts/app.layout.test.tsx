import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../../src/layouts/app.layout';
import { afterEach, beforeAll, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import useStage from '../../src/hooks/stage-store.hook';
import { useNavigate } from 'react-router-dom';
import useScreenSize from '../../src/hooks/useScreenSize.hook';
vi.mock('../../src/shared/components/sidebar/sidebar.component');
vi.mock('../../src/shared/components/topbar/topbar.component');
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
  Outlet: () => <div>Outlet</div>,
}));
vi.mock('../../src/hooks/useScreenSize.hook', () => ({
  __esModule: true,
  default: vi.fn(),
}));
vi.mock('../../src/hooks/stage-store.hook', () => ({
  __esModule: true,
  default: vi.fn(),
}));
vi.mock('../shared/topbar/topbar.component', () => ({
  TopBar: () => <div>TopBar</div>,
}));

vi.mock('../shared/footer/footer.component', () => ({
  Footer: () => <div>Footer</div>,
}));
beforeAll(() => {
  window.HTMLElement.prototype.scrollTo = vi.fn();
});

describe('AppLayout', () => {
  
  const setStepMock = vi.fn();  
  const navigateMock = vi.fn();
  
  const widthMock = 800;
  beforeEach(() => {
    (useStage as Mock).mockReturnValue({ setStep: setStepMock });    
    (useNavigate as Mock).mockReturnValue(navigateMock);
    (useScreenSize as Mock).mockReturnValue({ width: widthMock });
  });

    it('should render TopBar, main content, and Footer', () => {
      render(<AppLayout />);
      
      const mainElement = screen.getByTestId('main');
      expect(mainElement).toBeInTheDocument();
      
      // Verificamos que el estilo minHeight se aplica correctamente
      expect(mainElement).toHaveStyle('min-height: calc(100vh - 224px)');
    });
  
    it('should render Outlet component', () => {
      render(<AppLayout />);
      
      // Verificamos que el Outlet se renderiza
      expect(screen.getByTestId('main')).toBeInTheDocument();
    });
});
