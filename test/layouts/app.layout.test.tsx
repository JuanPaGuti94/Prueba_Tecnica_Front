import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../../src/layouts/app.layout';
import { afterEach, beforeAll, beforeEach, describe, it, vi } from 'vitest';

vi.mock('@react-keycloak/web');
vi.mock('../../src/hooks/applicant.hook');
vi.mock('../../src/hooks/stage-store.hook');
vi.mock('../../src/hooks/useScreenSize.hook');
vi.mock('../../src/shared/components/sidebar/sidebar.component');
vi.mock('../../src/shared/components/topbar/topbar.component');


beforeAll(() => {
  window.HTMLElement.prototype.scrollTo = vi.fn();
});

describe('AppLayout', () => {


  afterEach(() => {
    vi.clearAllMocks();
  });


  it('renderiza el layout de escritorio cuando el ancho es mayor o igual a 768', () => {

    render(
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>,
    );
  });
});
