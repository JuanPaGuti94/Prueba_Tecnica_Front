import { renderHook } from '@testing-library/react';
import { StageProvider } from '../../src/context/stage/stage.provider';
import useStage from '../../src/hooks/stage-store.hook';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
vi.mock('../../src/hooks/stage-store.hook');
// Crea un mock del StageContext
const MockStageProvider = ({ children, value }) => (
  <StageProvider>
    {children}
  </StageProvider>
);

describe('useStage', () => {
  it('should throw an error if used outside of StageProvider', () => {
    const { result } = renderHook(() => useStage());

  });

  it('should return context value when used within StageProvider', () => {
    const mockContextValue = { stage: 'test stage' };

    const { result } = renderHook(() => useStage(), {
      wrapper: ({ children }) => <MockStageProvider value={mockContextValue}>{children}</MockStageProvider>,
    });

  });
});