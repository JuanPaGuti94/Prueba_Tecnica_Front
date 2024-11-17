import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from '../../../src/pages/home/home.component'; // Asegúrate de que la ruta sea correcta
import { afterEach, beforeEach, describe, expect, it, Mock, test, vi } from 'vitest';
describe('HomePage', () => {
  it('should render the HomePage component correctly', () => {
    render(<HomePage />);

    // Verificar que el título principal esté presente
    expect(screen.getByText('#1 on ecommerce tools')).toBeInTheDocument();
    expect(screen.getByText('Optimice la gestión de productos sin esfuerzo')).toBeInTheDocument();
    expect(screen.getByText('Optimice su cadena de suministro con OrderTrack, la herramienta definitiva para una gestión eficiente de productos y pedidos.')).toBeInTheDocument();

    // Verificar que el botón "Productos" esté presente
    expect(screen.getByRole('button', { name: /productos/i })).toBeInTheDocument();

    // Verificar que la sección de imágenes esté presente
    expect(screen.getByText('La solución #1 para una gestión de catálogos perfecta')).toBeInTheDocument();

    // Verificar que las imágenes dentro de HomeImages estén presentes
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0); // Asegúrate de que haya imágenes

    // Verificar que la sección "Optimice la gestión de sus productos" esté presente
    expect(screen.getByText('Optimice la gestión de sus productos')).toBeInTheDocument();
    expect(screen.getByText('Descubra formas eficientes de organizar y realizar un seguimiento de todo su inventario de productos sin problemas.')).toBeInTheDocument();

    // Verificar que el botón "Catalogo" esté presente
    expect(screen.getByRole('button', { name: /catalogo/i })).toBeInTheDocument();

    // Verificar que la sección "Historias de éxito de clientes" esté presente
    expect(screen.getByText('Historias de éxito de clientes')).toBeInTheDocument();
    expect(screen.getByText('Vea cómo los líderes de la industria optimizan con IA.')).toBeInTheDocument();

    // Verificar que el texto de testimonio esté presente
    expect(screen.getByText(/Como alguien que administra un vasto catálogo de productos/i)).toBeInTheDocument();
    expect(screen.getByText('Jordan Lee, especialista en inventarios de WareSync')).toBeInTheDocument();

    // Verificar que la sección de suscripción esté presente
    expect(screen.getByText('Suscríbete a nuestras actualizaciones')).toBeInTheDocument();
    expect(screen.getByText('Manténgase informado sobre nuestras últimas innovaciones en gestión de catálogos y procesamiento de pedidos.')).toBeInTheDocument();
  });
});