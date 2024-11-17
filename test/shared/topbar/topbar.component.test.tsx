import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeAll, beforeEach, describe, expect, it, Mock, vi } from 'vitest';
import { useNavigate } from 'react-router-dom';
import useStage from './../../../src/hooks/stage-store.hook';
import useScreenSize from './../../../src/hooks/useScreenSize.hook';
import { TopBar } from './../../../src/shared/topbar/topbar.component';

// Mock de los hooks y componentes
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

vi.mock('./../../../src/hooks/stage-store.hook', () => ({
  __esModule: true,
  default: vi.fn(),
}));

vi.mock('./../../../src/hooks/useScreenSize.hook', () => ({
  __esModule: true,
  default: vi.fn(),
}));

vi.mock('./user-profile/user-profile.component', () => ({
  UserProfile: () => <div>User Profile</div>,
}));

vi.mock('./profile-icon/profile-icon.component', () => ({
  ProfileIcon: () => <div>Profile Icon</div>,
}));

vi.mock('./dropdown-menu/dropdown-menu.component', () => ({
  DropdownMenu: ({ options }) => (
    <div>
      {options.map((option, index) => (
        <button key={index} onClick={option.action}>
          {option.label}
        </button>
      ))}
    </div>
  ),
}));

vi.mock('../button-page/button-page.component', () => ({
  ButtonPage: ({ title, onClick }) => (
    <button onClick={onClick}>{title}</button>
  ),
}));

describe('TopBar', () => {
  const setStepMock = vi.fn();
  const navigateMock = vi.fn();
  const widthMock = 800;

  beforeEach(() => {
    (useStage as Mock).mockReturnValue({ setStep: setStepMock });
    (useNavigate as Mock).mockReturnValue(navigateMock);
    (useScreenSize as Mock).mockReturnValue({ width: widthMock });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render the logo and title', () => {
    render(<TopBar />);
    
    expect(screen.getByAltText('icon')).toBeInTheDocument();
    expect(screen.getByText('OrderTrack')).toBeInTheDocument();
  });

  it('should render navigation buttons', () => {
    render(<TopBar />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Productos')).toBeInTheDocument();
    expect(screen.getByText('Pedidos')).toBeInTheDocument();
  });

  it('should navigate to home page on Home button click', () => {
    render(<TopBar />);
    
    fireEvent.click(screen.getByText('Home'));
    
    expect(setStepMock).toHaveBeenCalledWith('home');
    expect(navigateMock).toHaveBeenCalledWith('/');
  });

  it('should navigate to products page on Productos button click', () => {
    render(<TopBar />);
    
    fireEvent.click(screen.getByText('Productos'));
    
    expect(setStepMock).toHaveBeenCalledWith('products');
    expect(navigateMock).toHaveBeenCalledWith('/products');
  });

  it('should navigate to orders page on Pedidos button click', () => {
    render(<TopBar />);
    
    fireEvent.click(screen.getByText('Pedidos'));
    
    expect(setStepMock).toHaveBeenCalledWith('orders');
    expect(navigateMock).toHaveBeenCalledWith('/orders');
  });

  it('should render user profile and dropdown menu', () => {
    render(<TopBar />);
    
    expect(screen.getByText('Juan')).toBeInTheDocument();
  });

});