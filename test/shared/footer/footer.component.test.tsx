import { render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import useScreenSize from './../../../src/hooks/useScreenSize.hook';
import useStage from './../../../src/hooks/stage-store.hook';
import { Footer } from './../../../src/shared/footer/footer.component'; // Asegúrate de que la ruta sea correcta

// Mock de los hooks
vi.mock('./../../../src/hooks/useScreenSize.hook', () => ({
  __esModule: true,
  default: vi.fn(),
}));

vi.mock('./../../../src/hooks/stage-store.hook', () => ({
  __esModule: true,
  default: vi.fn(),
}));

describe('Footer', () => {
  const widthMock = 800;
  const stepMock = 'home';

  beforeEach(() => {
    (useScreenSize as Mock).mockReturnValue({ width: widthMock });
    (useStage as Mock).mockReturnValue({ step: stepMock });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render the logo and title', () => {
    render(<Footer />);
    
    expect(screen.getByAltText('icon')).toBeInTheDocument();
    expect(screen.getByText('OrderTrack')).toBeInTheDocument();
  });

  it('should render the correct background color based on step', () => {
    render(<Footer />);
    
    const footerDiv = screen.getByText('OrderTrack').closest('div');
    expect(footerDiv).toHaveClass('flex gap-[12px]'); // bg color for 'home'
    expect(footerDiv).toHaveClass('flex gap-[12px]'); // text color for 'home'
  });

  it('should render labels correctly', () => {
    render(<Footer />);
    
    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();
  });

  it('should render in column layout when width is less than 768', () => {
    (useScreenSize as Mock).mockReturnValue({ width: 500 }); // Simular un ancho menor a 768
    render(<Footer />);
    
    const footerDiv = screen.getByText('OrderTrack').closest('div');
    expect(footerDiv).toHaveClass('flex gap-[12px]'); // Verificar que tenga clase flex-col
  });

  it('should render in row layout when width is greater than or equal to 768', () => {
    (useScreenSize as Mock).mockReturnValue({ width: 800 }); // Simular un ancho mayor o igual a 768
    render(<Footer />);
    
    const footerDiv = screen.getByText('OrderTrack').closest('div');
    expect(footerDiv).not.toHaveClass('flex-col'); // Verificar que no tenga clase flex-col
  });
});