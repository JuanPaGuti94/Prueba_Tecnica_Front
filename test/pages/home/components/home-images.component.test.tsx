import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomeImages } from '../../../../src/pages/home/components/home-images.component'; // Asegúrate de que la ruta sea correcta
import { afterEach, beforeEach, describe, expect, it, Mock, test, vi } from 'vitest';
describe('HomeImages', () => {
  it('should render the HomeImages component correctly', () => {
    render(<HomeImages />);

    // Verificar que todas las imágenes estén presentes
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(5); // Debería haber 5 imágenes

    // Verificar que cada imagen tenga el atributo alt correcto
    expect(images[0]).toHaveAttribute('alt', 'first');
    expect(images[1]).toHaveAttribute('alt', 'second');
    expect(images[2]).toHaveAttribute('alt', 'third');
    expect(images[3]).toHaveAttribute('alt', 'four');
    expect(images[4]).toHaveAttribute('alt', 'five');

    // Verificar que las imágenes tengan la clase correcta
    images.forEach(image => {
      expect(image).toHaveClass('w-[100px]', 'rounded');
    });
  });
});